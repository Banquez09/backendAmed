import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateRolDto {
    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    nombre?: string;
  
    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    descripcion?: string;
  }