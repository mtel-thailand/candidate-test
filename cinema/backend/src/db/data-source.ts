import { DataSource } from "typeorm";
import { Movie } from "../entities";
import { Director } from "../entities/Director";

export const initDB = (options?: { env: string }) => {
  const env = options?.env || "dev";

  const AppDataSource = new DataSource({
    type: "sqlite",
    database: `./tmp/sqlite.${env}.db`,
    synchronize: true,
    entities: [Movie, Director],
    subscribers: [],
    migrations: ["src/db/seeds/*.ts"],
  });

  return AppDataSource;
};

export const AppDataSource = initDB();

export const movieRepository = AppDataSource.getRepository('Movie');
export const directorRepository = AppDataSource.getRepository('Director');
