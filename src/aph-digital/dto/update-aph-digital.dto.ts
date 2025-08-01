import { PartialType } from '@nestjs/swagger';
import { CreateAphDigitalDto } from './create-aph-digital.dto';

export class UpdateAphDigitalDto extends PartialType(CreateAphDigitalDto) {}
