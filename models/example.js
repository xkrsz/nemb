'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Example = new Schema({
  name: String,
  surname: String,
  timestamp: Number
})

export default mongoose.model('example', Example)
