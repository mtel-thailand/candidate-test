import request from "supertest";
import app from "../src/app";
import { movieRepository } from "../src/db/data-source";

describe("GET /movies", () => {
  afterEach(() => {
    jest.restoreAllMocks(); // Restore the original implementation after each test
  });

  it("should return 200 OK", async () => {
    jest.spyOn(movieRepository, "find").mockResolvedValue([
      {
        id: "1",
        title: "The Shawshank Redemption",
        year: 1994,
        runtime: 142,
        genres: "Drama",
        director: "Frank Darabont",
        actors: "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
      },
      {
        id: "2",
        title: "The Godfather",
        year: 1972,
        runtime: 175,
        genres: "Crime, Drama",
        director: "Francis Ford Coppola",
        actors: "Marlon Brando, Al Pacino, James Caan, Richard S. Castellano",
      },
      {
        id: "3",
        title: "The Dark Knight",
        year: 2008,
        runtime: 152,
        genres: "Action, Crime, Drama, Thriller",
        director: "Christopher Nolan",
        actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      },
    ]);

    const response = await request(app).get("/movies");

    expect(response.status).toBe(200);
    expect(response.body.data).toHaveLength(3);
  });

  describe("query with title", () => {
    it("should return 200 OK", async () => {
      const response = await request(app)
        .get("/movies")
        .query({ title: "God" });

      expect(response.status).toBe(200);
      expect(response.body.data).toHaveLength(1);
      expect(response.body.data[0]).toHaveProperty("title", "The Godfather");
    });
  });
});

describe("GET /movies/:id", () => {
  it("should return 200 OK", async () => {
    const response = await request(app).get("/movies/1");

    expect(response.status).toBe(200);
    expect(response.body.data.id).toBe("1");
  });
});
