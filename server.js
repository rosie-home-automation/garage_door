var Path = require('path')
var door = require('./door').door
var Hapi = require('hapi')
var server = new Hapi.Server(8000, {
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
    method: 'GET',
    path: '/state',
    handler: function(request, reply) {
      reply({ isOpen: door.isOpen })
    }
  },
  {
    method: 'GET',
    path: '/toggle',
    handler: function(request, reply) {
      door.toggle(function() {
        reply({ toggled: true })
      })
    }
  }
])

module.exports.start = function() {
  server.start(function() {
    console.log('Server running at: %s', server.info.uri)
  })
}
