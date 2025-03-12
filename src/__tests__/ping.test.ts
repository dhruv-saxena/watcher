import request from 'supertest';
import app from '../server';

describe('Ping Route', () => {
  it('should respond with pong message', async () => {
    const response = await request(app).get('/api/ping');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'pong' });
  });
}); 