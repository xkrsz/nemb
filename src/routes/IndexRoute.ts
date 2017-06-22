import { NextFunction, Request, Response, Router } from "express";
import BaseRoute from './BaseRoute';
import Logger from '../components/Logger';
const log = new Logger().init();

export default class IndexRoute extends BaseRoute {

    constructor() {
        super();
    }

    public static create(router: Router) {
        log.info("[IndexRoute::create]");

        router.get("/", (req: Request, res: Response, next: NextFunction) => {
            new IndexRoute().index(req, res, next);
        });
    }

    public index(req: Request, res: Response, next: NextFunction) {
        const data = {
            status: 200,
            msg: "All good"
        };
        this.respond(req, res, data);
    }
}