import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEstadoAmbulanciaDto } from './dto/create-estado-ambulancia.dto';
import { UpdateEstadoAmbulanciaDto } from './dto/update-estado-ambulancia.dto';
import { EstadoAmbulancia } from './entities/estado-ambulancia.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EstadoAmbulanciaService {
  constructor(
    @InjectRepository(EstadoAmbulancia)
    private estadoAmbulanciaRepository: Repository<EstadoAmbulancia>,
  ) {}

 async findAll(): Promise<EstadoAmbulancia[]> {
      return await this.estadoAmbulanciaRepository.find();
    }
  
    async findOne(id: number): Promise<EstadoAmbulancia> {
      const rol = await this.estadoAmbulanciaRepository.findOne({ where: { id } });
      if (!rol) {
        throw new NotFoundException(`Rol with ID ${id} not found`);
      }
      return rol;
    }
}
