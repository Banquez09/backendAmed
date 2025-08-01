// src/solicitudes/dto/update-solicitud.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateSolicitudDto } from './create-solicitud.dto';
import { IsEnum, IsOptional } from 'class-validator';

export class UpdateSolicitudDto extends PartialType(CreateSolicitudDto) {
  @IsOptional()
  @IsEnum(['pendiente', 'en_proceso', 'completado', 'cancelado'])
  estado?: 'pendiente' | 'en_proceso' | 'completado' | 'cancelado';
}