import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Rol } from './entities/rol.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolService {

  constructor(
    @InjectRepository(Rol)
    private rolRepository: Repository<Rol>,
  ) {}

  /*async create(createRolDto: CreateRolDto): Promise<Rol> {
    const rol = this.rolRepository.create(createRolDto);
    return await this.rolRepository.save(rol);
  }*/

  /*create(createRolDto: CreateRolDto) {
    return 'This action adds a new rol';
  }*/

 /* findAll() {
    return `This action returns all rol`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rol`;
  }*/

    async findAll(): Promise<Rol[]> {
      return await this.rolRepository.find();
    }
  
    async findOne(id: number): Promise<Rol> {
      const rol = await this.rolRepository.findOne({ where: { id } });
      if (!rol) {
        throw new NotFoundException(`Rol with ID ${id} not found`);
      }
      return rol;
    }
  

  /*update(id: number, updateRolDto: UpdateRolDto) {
    return `This action updates a #${id} rol`;
  }*/

    /*async update(id: number, updateRolDto: UpdateRolDto): Promise<Rol> {
      const rol = await this.rolRepository.findOne({ where: { id } });
      if (!rol) {
        throw new NotFoundException(`Rol con ID ${id} no encontrado`);
      }
      
      // Usa el método update de TypeORM
      await this.rolRepository.update(id, updateRolDto);
      
      // Obtiene y retorna el rol actualizado
      return this.rolRepository.findOne({ where: { id } });
    }*/

  /*remove(id: number) {
    return `This action removes a #${id} rol`;
  }*/

    /*async remove(id: number): Promise<void> {
      const result = await this.rolRepository.delete(id);
      if (result.affected === 0) {
        throw new NotFoundException(`Rol con ID ${id} no encontrado`);
      }
    }  */
}
