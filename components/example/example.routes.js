(function () {
  const router = require('express').Router()
  let Example = require('./example')
  Example = new Example()

  router.route('/')
  .get((req, res) => {
    return res.status(200).json(Example.status())
  })

  module.exports = router
})()
