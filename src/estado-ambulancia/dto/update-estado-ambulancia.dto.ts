import { PartialType } from '@nestjs/swagger';
import { CreateEstadoAmbulanciaDto } from './create-estado-ambulancia.dto';

export class UpdateEstadoAmbulanciaDto extends PartialType(CreateEstadoAmbulanciaDto) {}
