'use strict'

const app = require('express')()
const server = require('http').Server(app)
const bodyParser = require('body-parser')

require('./modules/db')
const log = require('./modules/logger')


const port = process.env.PORT || 3000


// Express config
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


// Routes
app.use('/', require('./components/example/example.routes.js'))


server.listen(port, () => {
  log.info(`App running on localhost:${port}`)
})
