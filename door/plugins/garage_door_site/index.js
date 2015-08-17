var Site = require('./lib/site')

var register = function(server, options, next) {
  site = new Site(options)
  server.expose('site', site)

  return next()
}

register.attributes = {
  pkg: require('./package.json')
}

module.exports = register
