import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { CreateAmbulanciaDto } from './dto/create-ambulancia.dto';
import { UpdateAmbulanciaDto } from './dto/update-ambulancia.dto';
import { Repository } from 'typeorm';
import { Ambulancia } from './entities/ambulancia.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { EstadoAmbulancia } from 'src/estado-ambulancia/entities/estado-ambulancia.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AmbulanciaService {
  constructor(
    @InjectRepository(Ambulancia)
    private ambulanciaRepository: Repository<Ambulancia>,

    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(EstadoAmbulancia)
    private estadoAmbulanciaRepository: Repository<EstadoAmbulancia>,
  ) {}

  /*async create(createAmbulanciaDto: CreateAmbulanciaDto) {
    const ambulancia = this.ambulanciaRepository.create(createAmbulanciaDto);
    await this.ambulanciaRepository.save(ambulancia);
    return ambulancia;
  }*/

    async create(createAmbulanciaDto: CreateAmbulanciaDto): Promise<Ambulancia> {
      const { estadoAmbulanciaId, ...ambulanciaData } = createAmbulanciaDto;

      const estado = await this.estadoAmbulanciaRepository.findOneBy({ 
          id: estadoAmbulanciaId 
      });

      if (!estado) {
          throw new NotFoundException(`Estado with ID ${estadoAmbulanciaId} not found`);
      }

      const ambulancia = this.ambulanciaRepository.create({
          ...ambulanciaData,
          estado,
      });

      return this.ambulanciaRepository.save(ambulancia);
  }

  
  async findAll(): Promise<Ambulancia[]> {
    return this.ambulanciaRepository.find({
        relations: ['user', 'estado'],
    });
}


async findOne(id: number): Promise<Ambulancia> {
  const ambulancia = await this.ambulanciaRepository.findOne({
      where: { id },
      relations: ['user', 'estado'],
  });

  if (!ambulancia) {
      throw new NotFoundException(`Ambulancia with ID ${id} not found`);
  }

  return ambulancia;
}

async update(id: number, updateAmbulanciaDto: UpdateAmbulanciaDto): Promise<Ambulancia> {
  const ambulancia = await this.findOne(id);
  
  if (updateAmbulanciaDto.estadoAmbulanciaId) {
      const estado = await this.estadoAmbulanciaRepository.findOneBy({ 
          id: updateAmbulanciaDto.estadoAmbulanciaId 
      });
      
      if (!estado) {
          throw new NotFoundException(
              `Estado with ID ${updateAmbulanciaDto.estadoAmbulanciaId} not found`
          );
      }
      ambulancia.estado = estado;
  }

  Object.assign(ambulancia, updateAmbulanciaDto);
  return this.ambulanciaRepository.save(ambulancia);
}

async remove(id: number): Promise<void> {
  const result = await this.ambulanciaRepository.delete(id);
  if (result.affected === 0) {
      throw new NotFoundException(`Ambulancia with ID ${id} not found`);
  }
}

async findAmbulanceCerca(latitude: number, longitude: number): Promise<Ambulancia> {
  const ambulancias = await this.ambulanciaRepository.find({
      relations: ['estado'],
      where: {
          estado: { id: 1 },
      },
  });

  if (ambulancias.length === 0) {
      throw new NotFoundException('No hay ambulancias disponibles');
  }

  let nearestAmbulancia: Ambulancia | null = null;
  let minDistance = Infinity;

  for (const ambulancia of ambulancias) {
      const distance = this.calculateDistance(
          latitude,
          longitude,
          Number(ambulancia.latitude),
          Number(ambulancia.longitude),
      );

      if (distance < minDistance) {
          minDistance = distance;
          nearestAmbulancia = ambulancia;
      }
  }

  return nearestAmbulancia;
}

private calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Radio de la Tierra en km
  const dLat = this.toRad(lat2 - lat1);
  const dLon = this.toRad(lon2 - lon1);
  const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) * 
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

private toRad(degrees: number): number {
  return degrees * (Math.PI / 180);
}

/*  async findOne(id: number): Promise<Ambulancia> {
    const ambulancia = await this.ambulanciaRepository.findOne({ where: { id } });
    if (!ambulancia) {
      throw new NotFoundException(`Ambulance with ID ${id} not found`);
    }
    return ambulancia;
  }*/


  /*async update(id: number, updateAmbulanciaDto: UpdateAmbulanciaDto) {
    await this.ambulanciaRepository.update(id, updateAmbulanciaDto);
    return await this.ambulanciaRepository.findOne(id);
  }

  async remove(id: number) {
    await this.ambulanciaRepository.delete(id);
    return { deleted: true };
  }*/

  /*async findEstadoAmbulanciaByAmbulanciaId(id: number) {
    return await this.estadoAmbulanciaRepository.find({ where: { id: id } });
  }*/
    async updateLocation(ambulanceId: number, lat: number, lng: number, ubi: string): Promise<Ambulancia> {
      const ambulance = await this.ambulanciaRepository.findOne({ 
        where: { id: ambulanceId },
        relations: ['user', 'estado']
      });
      
      if (!ambulance) {
        throw new NotFoundException('Ambulancia no encontrada');
      }
   console.log('QUE RECIBO EN EL SERVICIO', ambulanceId, lat,lng,ubi)
      ambulance.latitude = Number(lat);
      ambulance.longitude = Number(lng);
      ambulance.ubicacionActual = ubi;
      
      await this.ambulanciaRepository.save(ambulance);
      return ambulance;
    }
  }