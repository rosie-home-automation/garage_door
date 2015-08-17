var request = require('request')

var door = null
var payload = {}
var pingUrl = null
var req = null

var Site = function(server, options) {
  door = server.plugins['garage_door_core']['door']
  pingUrl = optionsping.url + '/' + options.doorID
  req = request.defaults({
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

  setInterval(ping, options.ping.interval)
}

function ping() {
  req({ json:payload }, function(err, resp, body) {
    if (err || resp.statusCode != 200) return console.error('Request error occurred', err)

    if (body.command == 'open')
      door.open()

    if (body.command == 'close')
      door.close()
  })
}

module.exports = Site
