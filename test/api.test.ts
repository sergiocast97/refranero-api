import request from 'supertest';

import app from '../src/app';

describe('Refranero', () => {
  // Get random refran
  test('Get one random book', async () => {
    const res = await request(app).get('/');
    expect(res.status).toEqual(200);
    expect(res.body).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        spanish: expect.any(String),
        english: expect.any(String),
        spanglish: expect.any(String),
      })
    );
  });

  // Get refranero
  test('Get all books', async () => {
    const res = await request(app).get('/all');
    expect(res.status).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  // Get one refran
  test('Get one book', async () => {
    const res = await request(app).get('/-1');
    expect(res.status).toEqual(200);
    expect(res.body).toEqual({
      id: -1,
      spanish: 'Hola que tal?',
      english: 'Hey how you doing?',
      spanglish: 'Hello what about?',
    });
  });

  // Fail to get one refran
  test('Get one missing book', async () => {
    const res = await request(app).get('/99999');
    expect(res.status).toEqual(404);
    expect(res.body).toEqual({
      message: 'Refrán not found',
    });
  });
});
