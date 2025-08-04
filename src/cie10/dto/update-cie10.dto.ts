import { PartialType } from '@nestjs/swagger';
import { CreateCie10Dto } from './create-cie10.dto';

export class UpdateCie10Dto extends PartialType(CreateCie10Dto) {}
