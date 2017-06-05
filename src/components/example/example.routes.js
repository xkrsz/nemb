'use strict'

const Example = require('./example')
const router = require('express').Router()

router.route('/status')
  .get(Example.status)

module.exports = router
