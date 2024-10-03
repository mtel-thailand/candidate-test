import express from 'express';
import * as data from './data/seed.json';
import cors from 'cors';
import { movieRepository } from './db/data-source';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/movies', async (req, res) => {
  // const { movies } = data;
  const movies = await movieRepository.find();
  res.json({
    data: movies,
  });
});

export default app;
