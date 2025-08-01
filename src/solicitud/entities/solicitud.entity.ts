// src/solicitudes/entities/solicitud.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Solicitud {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  paciente: string;

  @Column()
  origen: string;

  @Column()
  destino: string;

  @Column()
  fecha: Date;

  @Column()
  estado: 'pendiente' | 'en_proceso' | 'completado' | 'cancelado';

  @Column()
  prioridad: 'baja' | 'media' | 'alta';
}