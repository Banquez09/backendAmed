import { PartialType } from '@nestjs/swagger';
import { CreateAmbulanciaDto } from './create-ambulancia.dto';

export class UpdateAmbulanciaDto extends PartialType(CreateAmbulanciaDto) {}
