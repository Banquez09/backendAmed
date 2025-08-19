import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';


class LoginDto {
  username: string;
  password: string;
}

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('login')
  @ApiOperation({ summary: 'Login user' })
  @ApiBody({ type: LoginDto })
  @ApiResponse({ status: 200, description: 'Successful login' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async login(@Body() loginDto: LoginDto) {
    try {
      const result = await this.authService.login(
        loginDto.username,
        loginDto.password,
      );
      console.log('Login result:', result); // Agregamos un log para depuración
      if (!result) {
        throw new UnauthorizedException('Credenciales inválidas');
      }
      return result; // Devolvemos directamente el resultado
    } catch (error) {
      console.error('Login error:', error); // Agregamos un log de error
      throw new UnauthorizedException('Credenciales inválidas');
    }
  }
}