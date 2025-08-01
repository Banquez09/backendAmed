// src/solicitudes/dto/create-solicitud.dto.ts
import { IsNotEmpty, IsEnum, IsDateString } from 'class-validator';

export class CreateSolicitudDto {
  @IsNotEmpty()
  paciente: string;

  @IsNotEmpty()
  origen: string;

  @IsNotEmpty()
  destino: string;

  @IsDateString()
  fecha: string;

  @IsEnum(['baja', 'media', 'alta'])
  prioridad: 'baja' | 'media' | 'alta';
}
