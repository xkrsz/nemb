(function () {
  const router = require('express').Router()
  let Example = require('./example')
  Example = new Example()

  router.route('/status')
  .get(Example.status)

  module.exports = router
})()
