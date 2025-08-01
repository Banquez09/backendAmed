import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EstadoAmbulancia } from '../entities/estado-ambulancia.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SeedEstadoAmbulancias {

    constructor(
        @InjectRepository(EstadoAmbulancia)
        private estadoAmbulanciaRepository: Repository<EstadoAmbulancia>,
      ) {}

      async seedEstadoAmbulancias() {
        // Verifica si los estados ya existen
        const count = await this.estadoAmbulanciaRepository.count();
        if (count === 0) {
          const defaultEstados = [
            { estado: 'Disponible'},
            { estado: 'En servicio'},
            { estado: 'En mantenimiento'},
          ];
    
          await this.estadoAmbulanciaRepository.save(defaultEstados);
          console.log('Estados de ambulancia por defecto insertados');
        }
      }  
}
