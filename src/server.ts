import express from 'express';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/ping', (_req, res) => {
  res.json({ message: 'pong' });
});

export default app; 