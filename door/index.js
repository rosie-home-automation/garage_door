var request = require('request')
var config = require('config')
var Door = require('./door')
var door = new Door()

var payload = null
var pingUrl = config.get('ping.url') + '/' + config.get('doorID')
var req = request.defaults({
  uri: pingUrl,
  method: 'POST'
})

door.on('open', function() {
  console.log('Door opened')
  payload.state = 'open'
})

door.on('close', function() {
  console.log('Door closed')
  payload.state = 'closed'
})


function ping() {
  req({ json:payload }, function(err, resp, body) {
    if (err || resp.statusCode != 200) return console.error('Request error occurred', err)

    if (body.command == 'open')
      door.open()

    if (body.command == 'close')
      door.close()
  })
}

setInterval(ping, config.get('ping.interval'))
