var Door = require('./lib/door')

var register = function(server, options, next) {
  door = new Door(options)
  server.expose('door', door)

  return next()
}

register.attributes = {
  pkg: require('./package.json')
}

module.exports = register
