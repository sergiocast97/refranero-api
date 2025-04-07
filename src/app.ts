import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import * as middlewares from './middlewares';
import api from './refranero/routes';

require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

// Health check
app.get('/ping', (req: Request, res: Response) => {
  res.json({ message: 'pong' });
});

app.use('/', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
