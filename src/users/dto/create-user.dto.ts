import { ApiProperty } from "@nestjs/swagger"
import { IsString, IsEmail, IsOptional, IsNumber, MinLength } from "class-validator"
import { Type } from "class-transformer"
import { Column } from "typeorm"; // Necesario para transformar rolId a número

export class CreateUserDto {
  @ApiProperty({ description: "Nombre del usuario", example: "Juan" })
  @IsString()
  nombre: string

  @ApiProperty({ description: "Apellido del usuario", example: "Pérez" })
  @IsString()
  apellido: string


  @ApiProperty({ description: "El nombre de usuario (único)", example: "Amed Prueba" })
  username: string;

  @ApiProperty({ description: "Contraseña del usuario", example: "passwordSegura123", minLength: 6 })
  @IsString()
  @MinLength(6, { message: "La contraseña debe tener al menos 6 caracteres." })
  password: string

  @ApiProperty({ description: "Número de teléfono del usuario (opcional)", example: "1234567890", required: false })
  @IsOptional()
  @IsString()
  telefono?: string

  @ApiProperty({ description: "ID del rol del usuario", example: 1 })
  @IsNumber()
  @Type(() => Number) // Asegura que rolId se transforme a número
  rolId: number
}
