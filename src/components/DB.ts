import * as mongoose from 'mongoose';
import Logger from './Logger';
const log = new Logger().init();

export default class DB {

  public mongouri: string;
  public db: mongoose.connection;

  /**
   * Connects to database.
   *
   * @param mongouri
   * @returns {mongoose.connection}
   */
  public connect(mongouri = "mongodb://localhost/example"): mongoose.connection {
    this.mongouri = mongouri;
    mongoose.connect(this.mongouri);

    this.db = mongoose.connection;
    this.db.on('error', this.onError);
    this.db.once('open', this.onOpen);

    return this.db;
  }

  constructor() {
    this.config();
  }

  /**
   * Configures database.
   */
  private config() {
    mongoose.Promise = global.Promise;
  }

  private onError(err) {
    return log.error(`Failed to connect to the database: ${err}`);
  }

  private onOpen() {
    return log.info('Database connected.');
  }
}