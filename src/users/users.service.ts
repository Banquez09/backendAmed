import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>, // Usa `readonly` para más claridad
  ) {}

  /*create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }*/

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
}