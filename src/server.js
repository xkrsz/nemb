'use strict'

import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'

import './modules/db'
import log from './modules/logger'

const app = express()
const server = http.Server(app)

const port = process.env.PORT || 3000

// Express config
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// Routes
app.use('/', require('./components/example/example.routes.js').default)

server.listen(port, () => {
  log.info(`App running on localhost:${port}`)
})
