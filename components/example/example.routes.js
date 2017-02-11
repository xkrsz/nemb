'use strict'

const example = new require('./example')()
const router = require('express').Router()

router.route('/status')
  .get(example.status)

module.exports = router