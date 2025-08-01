import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAphDigitalDto } from './dto/create-aph-digital.dto';
import { UpdateAphDigitalDto } from './dto/update-aph-digital.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AphDigital } from './entities/aph-digital.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AphDigitalService {
  constructor(
    @InjectRepository(AphDigital)
    private AphDigitalRepository: Repository<AphDigital>,
  ) {}

  async create(createAphDigitalDto: CreateAphDigitalDto): Promise<AphDigital> {
    const AphDigital = this.AphDigitalRepository.create(createAphDigitalDto);
    return await this.AphDigitalRepository.save(AphDigital);
  }

  async findAll(): Promise<AphDigital[]> {
    return await this.AphDigitalRepository.find({
      order: { createdAt: 'DESC' }
    });
  }

  async findOne(id: number): Promise<AphDigital> {
    const AphDigital = await this.AphDigitalRepository.findOne({ 
      where: { id } 
    });
    
    if (!AphDigital) {
      throw new NotFoundException(`Formulario médico con ID ${id} no encontrado`);
    }
    
    return AphDigital;
  }

  async findByNumeroFormulario(numeroFormulario: string): Promise<AphDigital> {
    const AphDigital = await this.AphDigitalRepository.findOne({
      where: { numeroFormulario }
    });
    
    if (!AphDigital) {
      throw new NotFoundException(`Formulario médico con número ${numeroFormulario} no encontrado`);
    }
    
    return AphDigital;
  }

  async findByPaciente(nombrePaciente: string): Promise<AphDigital[]> {
    return await this.AphDigitalRepository.find({
      where: { nombrePaciente },
      order: { createdAt: 'DESC' }
    });
  }

  async findByFecha(fecha: Date): Promise<AphDigital[]> {
    return await this.AphDigitalRepository.find({
      where: { fecha },
      order: { createdAt: 'DESC' }
    });
  }

  async update(id: number, updateAphDigitalDto: UpdateAphDigitalDto): Promise<AphDigital> {
    const AphDigital = await this.findOne(id);
    
    Object.assign(AphDigital, updateAphDigitalDto);
    
    return await this.AphDigitalRepository.save(AphDigital);
  }

  async remove(id: number): Promise<void> {
    const AphDigital = await this.findOne(id);
    await this.AphDigitalRepository.remove(AphDigital);
  }

  async findWithFilters(filters: {
    fechaInicio?: Date;
    fechaFin?: Date;
    nombrePaciente?: string;
    placa?: string;
    eps?: string;
    tipoServicio?: 'ambulanciaBasica' | 'medicalizado' | 'consultaMedica';
  }): Promise<AphDigital[]> {
    const query = this.AphDigitalRepository.createQueryBuilder('AphDigital');

    if (filters.fechaInicio) {
      query.andWhere('AphDigital.fecha >= :fechaInicio', { fechaInicio: filters.fechaInicio });
    }

    if (filters.fechaFin) {
      query.andWhere('AphDigital.fecha <= :fechaFin', { fechaFin: filters.fechaFin });
    }

    if (filters.nombrePaciente) {
      query.andWhere('AphDigital.nombrePaciente ILIKE :nombrePaciente', {
        nombrePaciente: `%${filters.nombrePaciente}%`
      });
    }

    if (filters.placa) {
      query.andWhere('AphDigital.placa ILIKE :placa', {
        placa: `%${filters.placa}%`
      });
    }

    if (filters.eps) {
      query.andWhere('AphDigital.eps ILIKE :eps', {
        eps: `%${filters.eps}%`
      });
    }

    if (filters.tipoServicio) {
      query.andWhere(`AphDigital.${filters.tipoServicio} = :tipoServicio`, {
        tipoServicio: true
      });
    }

    return await query.orderBy('AphDigital.createdAt', 'DESC').getMany();
  }
}
