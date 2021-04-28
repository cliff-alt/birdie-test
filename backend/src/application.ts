import * as express from 'express';
import { eventController } from './controllers/event';
import { summaryController } from './controllers/summary';

const app = express();

app.use('/events', eventController);
app.use('/summary', summaryController);

export default app;
