import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpException,
  HttpStatus,
  Body,
  Request
} from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags, ApiBearerAuth, ApiOkResponse } from "@nestjs/swagger"
import { UsersService } from "./users.service";
import { User } from "./entities/user.entity";
import { AuthGuard } from "@nestjs/passport";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { ChangePasswordDto } from "./dto/change-password-dto";
import { SaveSignatureDto } from "./dto/save-signature-dto";


@ApiTags("users")
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: "Create a new user" })
  @ApiResponse({ status: 201, description: "The user has been successfully created.", type: User })
  @ApiBearerAuth() // Requiere token JWT
 // @UseGuards(AuthGuard("jwt"), RolesGuard) // Protege con JWT y RolesGuard
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto)
  }

  @Get()
  @ApiOperation({ summary: "Get all users" })
  @ApiResponse({ status: 200, description: "Return all users.", type: [User] })
  @ApiBearerAuth()
 // @UseGuards(AuthGuard("jwt"), RolesGuard)
  findAll() {
    return this.usersService.findAll()
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a user by id' })
  @ApiResponse({ status: 200, description: 'Return the user.', type: User })
  @ApiBearerAuth()
 // @UseGuards(AuthGuard('jwt'), RolesGuard)
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id); // Asumiendo que findOne espera string UUID
  }

  @Patch(":id")
  @ApiOperation({ summary: "Update a user" })
  @ApiResponse({ status: 200, description: "The user has been successfully updated.", type: User })
  @ApiBearerAuth()
//  @UseGuards(AuthGuard("jwt"), RolesGuard)
  update(@Param('id') id: string,@Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto) // Asumiendo que update espera string UUID
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a user' })
  @ApiResponse({ status: 200, description: 'The user has been successfully deleted.' })
  @ApiBearerAuth()
  //@UseGuards(AuthGuard('jwt'), RolesGuard)
  remove(@Param('id') id: string) {
    return this.usersService.remove(id); // Asumiendo que remove espera string UUID
  }

  @Patch(":id/password")
  @ApiOperation({ summary: "Change user password" })
  @ApiResponse({ status: 200, description: "User password has been successfully changed." })
  @ApiBearerAuth()
 // @UseGuards(AuthGuard("jwt"), RolesGuard)
  async changePassword(@Param('id') id: string,@Body() changePasswordDto: ChangePasswordDto) {
    await this.usersService.changePassword(id, changePasswordDto.newPassword)
    return { message: "Contraseña actualizada exitosamente." }
  }

  @Get("/tripulacion")
  @ApiResponse({ status: 200, description: "The tripulation has been retrieved successfully." })
  @ApiOkResponse({ type: User, isArray: true }) // Especifica el tipo de retorno en la documentación
  @ApiBearerAuth()
 // @UseGuards(AuthGuard("jwt"), RolesGuard)
  async findTripulation(): Promise<User[]> {
    try {
      const users = await this.usersService.findTripulacion()
      if (!users || users.length === 0) {
        throw new HttpException("No tripulants found", HttpStatus.NOT_FOUND)
      }
      return users
    } catch (error) {
      // Manejo de errores con una excepción HTTP
      throw new HttpException("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  //Guardar firma del usuario autenticado
  @Patch('me/signature')
  @ApiOperation({ summary: 'Save current user signature' })
  @ApiResponse({ status: 200, description: 'The signature has been successfully saved.', type: User })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async saveMySignature(@Request() req: any, @Body() saveSignatureDto: SaveSignatureDto) {

    try {
      const userId = req.user?.userId || req.user?.email;
console.log(userId);
      if (!userId) {
        throw new HttpException('Usuario no autenticado', HttpStatus.UNAUTHORIZED);
      }

      return await this.usersService.updateSignature(userId, saveSignatureDto.firma);
    } catch (error) {
      throw new HttpException('Error al guardar la firma', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  //Obtener solo la firma del usuario autenticado
  @Get('me/signature')
  @ApiOperation({ summary: 'Get current user signature' })
  @ApiResponse({ status: 200, description: 'Return the current user signature.' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async getMySignature(@Request() req: any) {
    try {
      const userId = req.user?.userId || req.user?.email;

      if (!userId) {
        throw new HttpException('Usuario no autenticado', HttpStatus.UNAUTHORIZED);
      }

      const user = await this.usersService.findOne(userId);
      return { firma: user.firma || null };
    } catch (error) {
      throw new HttpException('Error al obtener la firma', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}
