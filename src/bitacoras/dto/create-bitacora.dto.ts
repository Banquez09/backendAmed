import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateBitacoraDto {
  @IsString()
  @IsNotEmpty()
  radioOperador: string;

  @IsString()
  @IsNotEmpty()
  entidad: string;

  @IsString()
  @IsNotEmpty()
  arl: string;

  @IsString()
  @IsNotEmpty()
  contacto: string;

  @IsString()
  @IsNotEmpty()
  nombrePaciente: string;

  @IsString()
  @IsNotEmpty()
  tipoDocumento: string;

  @IsString()
  @IsNotEmpty()
  documento: string;

  @IsString()
  @IsNotEmpty()
  nombreAcompanante: string;

  @IsString()
  @IsNotEmpty()
  fechaTraslado: string;

  @IsString()
  @IsNotEmpty()
  horaTraslado: string;

  @IsString()
  @IsNotEmpty()
  origen: string;

  @IsString()
  @IsNotEmpty()
  destino: string;

  @IsString()
  @IsNotEmpty()
  tipoTraslado: string;

  @IsString()
  @IsNotEmpty()
  conductor: string;

  @IsString()
  @IsNotEmpty()
  paramedico: string;

  @IsString()
  @IsNotEmpty()
  diagnostico: string;

  // @IsString()
  // @IsNotEmpty()
  // evolucion: string;

  @IsString()
  @IsNotEmpty()
  codigo: string;

  @IsString()
  @IsNotEmpty()
  mv: string;

  @IsString()
  @IsNotEmpty()
  medico: string;

  @IsString()
  @IsOptional()
  observacion?: string;

  @IsNumber()
  @IsNotEmpty()
  valor: number;

  // @IsString()
  // @IsNotEmpty()
  // noPlanilla: string;
}
