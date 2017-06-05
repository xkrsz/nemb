import * as express from 'express';
const app = express();
import * as http from 'http';
const server = http.Server(app);
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import './modules/db';
import log from './modules/logger';


const port = process.env.PORT || 3000;

// Express config
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());


// Routes
import exampleRoutes from './components/example/example.routes';
app.use('/', exampleRoutes);


server.listen(port, () => {
  log.info(`App running on localhost:${port}`);
});
