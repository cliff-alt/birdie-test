import * as express from 'express';
import * as path from 'path';
import { eventController } from './controllers/event';
import { summaryController } from './controllers/summary';

const app = express();

app.use(express.static(path.join(__dirname, '../../front-end/build')));

app.use('/events', eventController);
app.use('/summary', summaryController);

export default app;
