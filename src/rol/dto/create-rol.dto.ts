import { IsNotEmpty, IsOptional, IsString, Length } from "class-validator";

export class CreateRolDto {

    @IsNotEmpty()
    @IsString()
    @Length(3, 50)
    nombre: string;
  
    @IsOptional()
    @IsString()
    @Length(0, 255)
    descripcion?: string;
}
