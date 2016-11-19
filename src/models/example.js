import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Game = new Schema({
  name: String,
  surname: String,
  timestamp: Number
})

export default mongoose.model('example', Game)
