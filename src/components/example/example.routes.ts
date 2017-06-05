import Example from './example';
import * as express from 'express';
const router = express.Router();

router.route('/status')
  .get(Example.status);

export default router;
