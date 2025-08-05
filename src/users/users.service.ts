import { HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { webcrypto } from "node:crypto";
import { Rol } from "../rol/entities/rol.entity";
import { RolService } from "../rol/rol.service";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>, // Usa `readonly` para más claridad
    private readonly rolService: RolService,

  ) {}

  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  findAll() {
    return this.userRepository.find();
  //  return 'This action adds a new user';

  }

  findOne(id: string) {
    return this.userRepository.findByIds(id as any);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } })
    if (!user) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado.`)
    }

    // Si se proporciona rolId en el DTO, busca la entidad Rol y asígnala
    if (updateUserDto.rolId !== undefined) {
      const rol = await this.rolService.findOne(updateUserDto.rolId);
      if (!rol) {
        throw new NotFoundException(`Rol con ID ${updateUserDto.rolId} no encontrado.`)
      }
      user.rol = rol // Asigna la entidad Rol encontrada
    }

    // Actualiza otras propiedades del usuario
    // Excluye rolId y password del DTO antes de asignarlos directamente
    const { rolId, password, ...restOfUpdateDto } = updateUserDto
    Object.assign(user, restOfUpdateDto) // Actualiza los campos restantes


    return this.userRepository.save(user) // Guarda la entidad de usuario actualizada
  }

  remove(id: string) {
    return this.userRepository.delete(id);
  }

    async findTripulacion(): Promise<User[]> {
      const users = await this.userRepository.find({
        where: {
          rol: { id: In([3, 4, 5]) },
        },
        relations: ['rol', 'ambulancia'],
      });
  
      if (!users || users.length === 0) {
        // Emite una excepción NotFoundException si no encuentra usuarios
        throw new NotFoundException('No tripulation members found with the specified roles');
      }
  
      return users;
    }

  /**
   * Hashes a string using SHA-256 and returns it as a hexadecimal string.
   * This is a helper function for WebCrypto hashing.
   */
  private async hashPasswordWithWebCrypto(password: string): Promise<string> {
    const textEncoder = new TextEncoder()
    const data = textEncoder.encode(password)
    const hashBuffer = await webcrypto.subtle.digest("SHA-256", data)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    const hashedPassword = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("")
    return hashedPassword
  }

  async changePassword(id: string, newPasswordPlain: string): Promise<void> {
    const user = await this.userRepository.findOne({ where: { id } })

    if (!user) {
      throw new HttpException("Usuario no encontrado", HttpStatus.NOT_FOUND)
    }

    // Hashear la nueva contraseña usando WebCrypto
    user.password = await this.hashPasswordWithWebCrypto(newPasswordPlain)

    // Guardar el usuario con la nueva contraseña hasheada
    await this.userRepository.save(user)
  }

}