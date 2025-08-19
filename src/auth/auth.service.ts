import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}


  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersRepository.findOne({
      where: { username },
      relations: ['rol']
    });

    console.log("USUARIO", user);

    if (!user) {
      console.log("Usuario no encontrado");
      return null;
    }

    // Verificar que el usuario tenga una contraseña válida
    if (!user.password) {
      console.log("Usuario sin contraseña válida");
      return null;
    }

    console.log("CONTRASEÑA", user.password);
    console.log("Usuario encontrado:", user.username);

    const isPasswordValid = await bcrypt.compare(pass, user.password);
    console.log("Comparación de contraseñas:", isPasswordValid);

    if (isPasswordValid) {
      const { password, ...result } = user;
      return result;
    }

    console.log("Contraseña incorrecta");
    return null;
  }

  async login(username: string, password: string) {
    const user = await this.validateUser(username, password);
    if (!user) {
      console.log("Login fallido para el usuario:", username);
      throw new UnauthorizedException('Credenciales inválidas');
    }
    console.log("Login exitoso para el usuario:", user.username);
    const userRoleName = user.rol ? user.rol.nombre : "default_role"

    const payload = { username: user.username, sub: user.id, role: userRoleName }
    return {
      access_token: this.jwtService.sign(payload),
      role: userRoleName, // Ahora devolvemos el nombre del rol como una cadena
    };
  }
 
}
