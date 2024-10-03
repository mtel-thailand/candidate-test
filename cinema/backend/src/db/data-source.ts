import { DataSource } from "typeorm";
import { Movie } from "../entities";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./tmp/sqlite.db",
  synchronize: true,
  logging: true,
  entities: [Movie],
  subscribers: [],
  migrations: [],
});

export const movieRepository = AppDataSource.getRepository(Movie)
