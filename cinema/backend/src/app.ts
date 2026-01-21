import express from "express";
import cors from "cors";
import { movieRepository } from "./db/data-source";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/movies", async (req, res) => {
  const movies = await movieRepository.find();

  res.json({
    data: movies,
  });
});

app.patch("/movies/:id", async (req, res) => {
  const id = req.params.id

  const movie = await movieRepository.findOneBy({ id });
  res.json({
    data: movie,
  });
});
export default app;
