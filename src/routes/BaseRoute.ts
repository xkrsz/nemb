import { Request, Response, NextFunction } from 'express';

export default class BaseRoute {
    constructor() {

    }

    public respond(req: Request, res: Response, data: Object) {
        res.json(data);
    }
}