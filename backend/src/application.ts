import * as express from 'express';
import { eventController } from './controllers/event';

const app = express();

app.use('/events', eventController);

export default app;
