import { EstadoAmbulancia } from "src/estado-ambulancia/entities/estado-ambulancia.entity";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Ambulancia {
    
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 20, unique: true })
  placa: string;

  @Column({ type: 'varchar', length: 250})
  ubicacionActual: string;

  @OneToMany(() => User, user => user.ambulancia)
  user: User[];

  @CreateDateColumn({ type: 'timestamp with time zone' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updatedAt: Date;

  @ManyToOne(() => EstadoAmbulancia, (estadoAmbulancia) => estadoAmbulancia.ambulancias, { eager: true })
  @JoinColumn({ name: 'estadoAmbulanciaId' }) // Clave foránea
  estado: EstadoAmbulancia; // Relación muchos a uno

  @Column({ type: 'decimal', precision: 10, scale: 8 })
  latitude: number;

  @Column({ type: 'decimal', precision: 11, scale: 8 })
  longitude: number;

  /*id: number;
  placa: string;
  equipamiento: string[];
  estado: 'disponible' | 'en servicio' | 'en mantenimiento';*/
  

  // tanto equipamiento como estado son arrays
}
