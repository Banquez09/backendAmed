import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm";

@Entity('cie10')
export class Cie10 {

  @PrimaryColumn()
  codigo: string;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;
}