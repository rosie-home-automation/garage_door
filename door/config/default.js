module.exports = {

  doorID: 1, // make this something crazy for production

  ping: {
    url: 'http://something.herokuapp.com/ping',
    interval: 10 * 1000 // 10 seconds
  },

  pins: {
    sensor:       17,
    statusOpen:   23,
    statusClosed: 24,
    doorSwitch:   18
  }
}
