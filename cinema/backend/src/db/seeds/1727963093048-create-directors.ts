import { MigrationInterface, QueryRunner } from "typeorm";
import { AppDataSource } from "../data-source";

export class CreateDirectors1727973093048 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const directorRepository = AppDataSource.getRepository("director");

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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
