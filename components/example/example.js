'use strict'

class Example {
  status (req, res) {
    res.status(200)
    res.send('OK')
    return true
  }
}

module.exports = Example