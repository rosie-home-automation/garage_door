var Path = require('path')
var Hapi = require('hapi')

var doors = {}

var server = new Hapi.Server(3000, {
  files: { relativeTo: Path.join(__dirname, 'public') }
})

server.route([
  {
    method: 'GET',
    path: '/',
    handler: {
      file: 'home.html'
    }
  },
  {
    method: 'POST',
    path: '/login',
    handler: function(request, reply) {

    }
  },
  {
    method: 'POST',
    path: '/ping/{id}',
    config: {
      payload: {
        output: 'data',
        parse: true
      },
      handler: function(request, reply) {
        var id = request.params.id
        var door = doors[id] || (doors[id] = {})
        door.state = request.payload.state

        reply({ command: door.command })
        door.command = undefined
      }
    }
  },
  {
    method: 'GET',
    path: '/state/{id}',
    handler: function(request, reply) {
      var id = request.params.id
      reply({ state: doors[id].state })
    }
  },
  {
    method: 'GET',
    path: '/close/{{id}}',
    handler: function(request, reply) {
      var id = request.params.id
      doors[id].command = 'close'
      reply({ toggled: true })
    }
  },
  {
    method: 'GET',
    path: '/open/{{id}}',
    handler: function(request, reply) {
      var id = request.params.id
      doors[id].command = 'open'
      reply({ toggled: true })
    }
  }
])

server.start(function() {
  console.log('Server running at: %s', server.info.uri)
})

