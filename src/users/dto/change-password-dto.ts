import { ApiProperty } from "@nestjs/swagger"
import { IsString, MinLength } from "class-validator"

export class ChangePasswordDto {
  @ApiProperty({ description: "The new password for the user", minLength: 6 })
  @IsString()
  @MinLength(6, { message: "La contraseña debe tener al menos 6 caracteres." })
  newPassword: string
}
