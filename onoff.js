var Gpio = require('onoff').Gpio

var button = new Gpio(18, 'in', 'both')
button.watch(function(err, value) {
  console.log(value)
})
