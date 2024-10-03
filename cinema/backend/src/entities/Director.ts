import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Director {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;
}
