'use strict'

const Example = require('./example')
const example = new Example()
const router = require('express').Router()

router.route('/status')
  .get(example.status)

module.exports = router