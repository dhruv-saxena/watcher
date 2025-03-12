import express, { Express, Request, Response } from 'express';
import cors from 'cors';

export function createServer(): Express {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());

  // Routes
  app.get('/api/ping', (_req: Request, res: Response) => {
    res.json({ message: 'pong' });
  });

  return app;
}

export default createServer(); 