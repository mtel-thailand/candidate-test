import express from "express";
import cors from "cors";
import { directorRepository, movieRepository } from "./db/data-source";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/movies", async (req, res) => {
  const movies = await movieRepository.find({
    relations: ["director"],
  });

  res.json({
    data: movies,
  });
});

export default app;
