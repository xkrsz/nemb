import * as mongoose from 'mongoose';
import log from './logger';

const mongouri = process.env.MONGOURI || 'mongodb://localhost/example';
mongoose.connect(mongouri);
const db = mongoose.connection;
db.on('error', (err) => {
  return log.error(err)
});
db.once('open', () => {
  return log.info('Database connected')
});

mongoose.Promise = global.Promise;

// Models
global.MExample = require('../models/example');
