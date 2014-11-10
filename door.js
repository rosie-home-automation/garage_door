var Gpio = require('onoff').Gpio
var util = require('util')
var EventEmitter = require('events').EventEmitter

var Door = module.exports = function(sensorPin, statusOpenPin, statusClosedPin) {
  EventEmitter.call(this)
  this.isOpen = false

  var sensor = new Gpio(sensorPin || 18, 'in', 'both')
  var statusOpen = new Gpio(statusOpenPin || 17, 'out')
  var statusClosed = new Gpio(statusClosedPin || 23, 'out')

  var update = function(err, value) {
    console.log('Value %d', value)
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
}
