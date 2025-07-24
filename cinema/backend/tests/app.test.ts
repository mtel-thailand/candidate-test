import 'jest';
import request from "supertest";
import app from "../src/app";
import { directorRepository, movieRepository } from "../src/db/data-source";
import { AppDataSource } from "../src/db/data-source";
import { Like } from 'typeorm';

beforeAll(async () => {
  await AppDataSource.initialize();

  const directors = [
    {
      name: "Frank Darabont",
    },
    {
      name: "Francis Ford Coppola",
    },
    {
      name: "Christopher Nolan",
    },
  ];

  await directorRepository.save(directors);    

  const movies = [
    {
      title: "The Shawshank Redemption",
      year: 1994,
      runtime: 142,
      genres: "Drama",
      director_id: "1",
      actors: "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
    },
    {
      title: "The Godfather",
      year: 1972,
      runtime: 175,
      genres: "Crime, Drama",
      director_id: "2",
      actors: "Marlon Brando, Al Pacino, James Caan, Richard S. Castellano",
    },
    {
      title: "The Dark Knight",
      year: 2008,
      runtime: 152,
      genres: "Action, Crime, Drama, Thriller",
      director_id: "3",
      actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    },
  ];

  await movieRepository.save(movies);
});

afterAll(async () => {
  await AppDataSource.dropDatabase();
});

describe("GET /movies", () => {
  it("should return 200 OK", async () => {
    const response = await request(app).get("/movies");

    expect(response.status).toBe(200);
    expect(response.body.data).toHaveLength(3);
  });

  describe("query with title", () => {
    it("should return 200 OK", async () => {
      const spy = jest.spyOn(movieRepository, 'find');

      const response = await request(app)
        .get("/movies")
        .query({ title: "God" });

      expect(response.status).toBe(200);
      expect(response.body.data).toHaveLength(1);
      expect(response.body.data[0]).toHaveProperty("title", "The Godfather");

      expect(spy).toHaveBeenCalledWith(
        expect.objectContaining({
          where: expect.objectContaining({
            title: Like('%God%'),
          }),
        }),
      );

      spy.mockRestore(); // clean up
    });
  });
});

describe("GET /movies/:id", () => {
  it("should return 200 OK", async () => {
    const response = await request(app).get("/movies/1");

    expect(response.status).toBe(200);
    expect(response.body.data).toHaveProperty("id", 1);
  });

  // it("should return 200 ok with director", async () => {
  //   const response = await request(app).get("/movies/1");

  //   expect(response.status).toBe(200);
  //   expect(response.body.data.director).toHaveProperty(
  //     "name",
  //     "Frank Darabont"
  //   );
  // });
});
