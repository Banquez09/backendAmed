import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('cie10')
export class Cie10 {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  codigo: string;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;
}
