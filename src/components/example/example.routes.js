import express from 'express'
import Example from './example'

const router = express.Router()
let example = new Example()

router.route('/status')
.get(example.status)

export {router as default}