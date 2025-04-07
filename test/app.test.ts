import request from 'supertest';

import app from '../src/app';
describe('Sanity tests', () => {
  // Hello world
  test('Hello world', async () => {
    const res = await request(app).get('/');
    expect(res.status).toEqual(200);
    expect(res.body).toEqual({
      message: 'Hello world',
    });
  });

  // Ping pong
  test('Ping pong', async () => {
    const res = await request(app).get('/ping');
    expect(res.status).toEqual(200);
    expect(res.body).toEqual({
      message: 'pong',
    });
  });

  // 404 Page
  test('404', async () => {
    const res = await request(app).get('/whatever');
    expect(res.status).toEqual(404);
  });
});
