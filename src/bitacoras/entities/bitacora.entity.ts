import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('bitacoras')
export class Bitacora {
  @PrimaryGeneratedColumn()
  no: number;

  @Column()
  radioOperador: string;

  @Column()
  entidad: string;

  @Column()
  contacto: string;

  @Column()
  nombrePaciente: string;

  @Column()
  tipoDocumento: string;

  @Column()
  documento: string;

  @Column()
  nombreAcompanante: string;

  @Column()
  fechaTraslado: Date; // o Date, si manejas tipo fecha

  @Column()
  horaTraslado: string;

  @Column()
  origen: string;

  @Column()
  destino: string;

  @Column()
  tipoTraslado: string;

  @Column()
  conductor: string;

  @Column()
  paramedico: string;

  @Column()
  diagnostico: string;

  @Column()
  evolucion: string;

  @Column()
  codigo: string;

  @Column()
  mv: string;

  @Column()
  medico: string;

  @Column()
  observacion: string;

  @Column('decimal', { precision: 10, scale: 2 })
  valor: number;

  @Column()
  noPlanilla: string;
}
