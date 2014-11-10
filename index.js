var Door = require('./door')
var door = new Door()

door.on('open', function() {
  console.log('Door opened')
})

door.on('close', function() {
  console.log('Door closed')
})


var server = require('./server')
server.start()
