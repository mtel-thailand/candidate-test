import request from 'supertest';
import app from '../src/app';

describe('GET /movies', () => {
  it('should return 200 OK', async () => {
    const response = await request(app).get('/movies')

    expect(response.status).toBe(200);
    expect(response.body.data).toHaveLength(3);
  });

  describe('query with title', () => {
    it('should return 200 OK', async () => {
      const response = await request(app).get('/movies').query({ title: 'God' })

      expect(response.status).toBe(200);
      expect(response.body.data).toHaveLength(1);
      expect(response.body.data[0]).toHaveProperty('title', 'The Godfather');
    });
  });
});

describe('GET /movies/:id', () => {
  it('should return 200 OK', async () => {
    const response = await request(app).get('/movies/1')

    expect(response.status).toBe(200);
    expect(response.body.data.id).toBe("1");
  });
});
