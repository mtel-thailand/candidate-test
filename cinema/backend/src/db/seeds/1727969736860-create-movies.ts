import { MigrationInterface, QueryRunner } from "typeorm";
import { AppDataSource } from "../data-source"; // Adjust the path if needed

export class Seed1727969736860 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const movieRepository = AppDataSource.getRepository("movie");

    // Movie data to be inserted
    const movies = [
      {
        title: "The Shawshank Redemption",
        year: 1994,
        runtime: 142,
        genres: "Drama",
        director: "Frank Darabont",
        actors: "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
      },
      {
        title: "The Godfather",
        year: 1972,
        runtime: 175,
        genres: "Crime, Drama",
        director: "Francis Ford Coppola",
        actors: "Marlon Brando, Al Pacino, James Caan, Richard S. Castellano",
      },
      {
        title: "The Dark Knight",
        year: 2008,
        runtime: 152,
        genres: "Action, Crime, Drama, Thriller",
        director: "Christopher Nolan",
        actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      },
    ];

    // Save the movies to the database
    await movieRepository.save(movies);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // You can implement logic to reverse the changes made in the up() method
  }
}
