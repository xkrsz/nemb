import * as log from 'winston';

export default class Logger {
    public log: log.Winston;

    constructor() {
        this.log = log;
    }

    public init() {
        return this.log;
    }
}
