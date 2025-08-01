import { Ambulancia } from "src/ambulancia/entities/ambulancia.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EstadoAmbulancia {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  estado: string;

  @OneToMany(() => Ambulancia, (ambulancia) => ambulancia.estado)
  ambulancias: Ambulancia[]; // Relación uno a muchos
}
