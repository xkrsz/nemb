const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Game = new Schema({
  name: String,
  surname: String,
  timestamp: Number
})

module.exports = mongoose.model('example', Game)
