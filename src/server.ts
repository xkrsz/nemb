import * as express from 'express';
import * as cors from 'cors';
import DB from './components/DB';
import IndexRoute from "./routes/IndexRoute";

export class Server {

  public app: express.Application;

  public static bootstrap(): Server {
    return new Server();
  }

  constructor() {
    new DB().connect();
    this.app = express();
    this.config();
    this.routes();
    this.api();
  }

  /**
   * Configure application
   *
   * @class Server
   * @method config
   */
  public config() {
    this.app.use(cors());

    this.app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
      err.status = 404;
      next(err);
    });
  }

  /**
   * Create API routes
   *
   * @class Server
   * @method api
   */
  public api() {
    let router: express.Router;
    router = express.Router();

    IndexRoute.create(router);

    this.app.use(router);
  }

  /**
   * Initialise router
   *
   * @class Server
   * @method routes
   */
  public routes() {

  }
}
