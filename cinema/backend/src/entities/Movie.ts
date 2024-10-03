import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  year: number;

  @Column()
  runtime: number;

  @Column()
  genres: string;

  @Column()
  director: string;

  @Column()
  actors: string;
}
