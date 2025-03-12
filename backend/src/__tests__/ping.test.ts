import request from 'supertest';
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

describe('Ping Route', () => {
  let app: express.Application;
  let httpServer: ReturnType<typeof createServer>;
  let io: Server;

  beforeAll(() => {
    app = express();
    httpServer = createServer(app);
    io = new Server(httpServer);

    app.get('/api/ping', (req, res) => {
      res.json({ message: 'pong' });
    });
  });

  afterAll((done) => {
    io.close();
    httpServer.close(done);
  });

  it('should respond with pong message', async () => {
    const response = await request(app).get('/api/ping');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'pong' });
  });
}); 