var Gpio = require('onoff').Gpio
var util = require('util')
var EventEmitter = require('events').EventEmitter

var Door = function(options) {
  EventEmitter.call(this)
  this.isOpen = false
  var pins = options.pins

  var sensor = new Gpio(pins.sensor, 'in', 'both')
  var statusOpen = new Gpio(pins.statusOpen, 'out')
  var statusClosed = new Gpio(pins.statusClosed, 'out')

  var update = function(err, value) {
    statusOpen.writeSync(value^1)
    statusClosed.writeSync(value)
    this.isOpen = !value
    this.emit(value ? 'close' : 'open')
  }.bind(this)

  sensor.read(update)
  sensor.watch(update)

  Door.door = this
}

util.inherits(Door, EventEmitter)
var api = Door.prototype

api.toggle = function() {
  console.log('Door toggled')
  var doorSwitch = new Gpio(options.pins.doorSwitch, 'out')
  doorSwitch.writeSync(1)
  setTimeout(function() {
    doorSwitch.writeSync(0)
  }, 100)
}

api.open = function() {
  if (!this.isOpen) this.toggle()
}

api.close = function() {
  if (this.isOpen) this.toggle()
}

module.exports = Door
