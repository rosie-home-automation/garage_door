var gpio = require('pi-gpio')

var pin = 7

function read() {
  gpio.open(pin, 'IN', function(err) {
    gpio.read(pin, function(err, val) {
      gpio.close(pin)
      console.log(val)
    })
  })
}

setInterval(read, 1000)
