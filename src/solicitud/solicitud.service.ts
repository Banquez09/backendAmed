// src/solicitudes/solicitudes.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Solicitud } from './entities/solicitud.entity';
import { CreateSolicitudDto } from './dto/create-solicitud.dto';
import { UpdateSolicitudDto } from './dto/update-solicitud.dto';

@Injectable()
export class SolicitudesService {
  constructor(
    @InjectRepository(Solicitud)
    private solicitudesRepository: Repository<Solicitud>,
  ) {}

  async create(createSolicitudDto: CreateSolicitudDto): Promise<Solicitud> {
    const solicitud = this.solicitudesRepository.create({
      ...createSolicitudDto,
      estado: 'pendiente',
    });
    return this.solicitudesRepository.save(solicitud);
  }

  async findAll(): Promise<Solicitud[]> {
    return this.solicitudesRepository.find();
  }

  async findOne(id: number): Promise<Solicitud> {
    return this.solicitudesRepository.findOne({ where: { id } });
  }

  async update(id: number, updateSolicitudDto: UpdateSolicitudDto): Promise<Solicitud> {
    await this.solicitudesRepository.update(id, updateSolicitudDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.solicitudesRepository.delete(id);
  }
}