import express from 'express';
import * as data from './data/seed.json';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/movies', async (req, res) => {
  const { movies } = data;
  res.json({
    data: movies,
  });
});

export default app;
