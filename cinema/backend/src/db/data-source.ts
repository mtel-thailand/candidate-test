import { DataSource } from "typeorm";

export const initDB = (options?: { env: string }) => {
  const env = options?.env || "dev";

  const AppDataSource = new DataSource({
    type: "sqlite",
    database: `./tmp/sqlite.${env}.db`,
    synchronize: true,
    entities: ['src/entities/**/*.ts'],
    subscribers: [],
    migrations: ["src/db/seeds/*.ts"],
  });

  return AppDataSource;
};

export const AppDataSource = initDB({ env: process.env.NODE_ENV || "dev" });

export const movieRepository = AppDataSource.getRepository('Movie');
export const directorRepository = AppDataSource.getRepository('Director');
