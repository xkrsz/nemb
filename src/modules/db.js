import mongoose from 'mongoose'

import log from './logger'

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
global.ExampleM = require('../models/example')

export default 'elo'