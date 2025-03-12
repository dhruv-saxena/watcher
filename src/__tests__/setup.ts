import app from '../server';

let server: any;

beforeAll(() => {
  server = app.listen(0); // Use port 0 to get a random available port
});

afterAll((done) => {
  server.close(done);
}); 