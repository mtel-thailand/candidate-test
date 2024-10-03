import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Director } from "./Director";

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
  director_id: string;

  @Column()
  actors: string;
}
