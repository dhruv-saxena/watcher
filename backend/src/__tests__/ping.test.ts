import request from 'supertest';
import express from 'express';
import { describe, it, expect, beforeEach } from '@jest/globals';

describe('Ping Route', () => {
  let app: express.Application;

  beforeEach(() => {
    app = express();
    app.get('/api/ping', (req, res) => {
      res.json({ message: 'pong' });
    });
  });

  it('should respond with pong message', async () => {
    const response = await request(app).get('/api/ping');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'pong' });
  });
}); 