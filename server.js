'use strict'

const express = require('express')
const app = express()
const http = require('http').Server(app)
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const log = require('bunyan').createLogger({
  name: 'example',
  src: true,
  streams: [
    {
      level: 'debug',
      stream: process.stdout
    },
    {
      level: 'warn',
      path: './warn.log'
    },
    {
      level: 'trace',
      path: './trace.log'
    }
  ]
})

const port = process.env.PORT || 3000

// Express config
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// Database
const mongouri = process.env.MONGOURI || 'mongodb://localhost/example'
mongoose.connect(mongouri)
const db = mongoose.connection
db.on('error', (err) => {
  return log.error(err)
})
db.once('open', () => {
  return log.info('Database connected')
})

// Models
global.ExampleM = require('./models/example')

// Routes
app.use('/', require('./components/example/example.routes.js'))

http.listen(port, () => {
  log.info(`App running on localhost:${port}`)
  console.log('ok')
})
