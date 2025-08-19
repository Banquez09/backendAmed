import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class SeedUser {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
      ) {}

      async seedUser() {
        // Verifica si los roles ya existen
        const count = await this.userRepository.count();
        if (count === 0) {
          const defaultUser = [
            { nombre: 'Joiner', apellido: 'Escorcia',  username: 'JoinerE',password: '$2b$10$tov2nOM/oFmxXTUjFEoP4Okf7QzntHMXzRoE71xrAhpuCmKpx5CkW', telefono: '300', rol: { id: 1}},
            { nombre: 'Bayron', apellido: 'Fontalvo', username: 'Byron', password: '$2b$10$tov2nOM/oFmxXTUjFEoP4Okf7QzntHMXzRoE71xrAhpuCmKpx5CkW', telefono: '312', rol: { id: 1}},
            { nombre: 'Juan',  apellido: 'Gomez', username: 'JuanC',password: '$2b$10$tov2nOM/oFmxXTUjFEoP4Okf7QzntHMXzRoE71xrAhpuCmKpx5CkW', telefono: '318', rol: { id: 1}},
            { nombre: 'Paramedico',  apellido: 'Dos',username: 'Paramedico2', password: '$2b$10$tov2nOM/oFmxXTUjFEoP4Okf7QzntHMXzRoE71xrAhpuCmKpx5CkW', telefono: '318', rol: { id: 2}},
            { nombre: 'Paramedico',  apellido: 'Uno', username: 'Paramedico1', password: '$2b$10$tov2nOM/oFmxXTUjFEoP4Okf7QzntHMXzRoE71xrAhpuCmKpx5CkW', telefono: '318', rol: { id: 3}},
            { nombre: 'AMED',  apellido: 'DEMO',  username: 'AMED', password: '$2b$10$tov2nOM/oFmxXTUjFEoP4Okf7QzntHMXzRoE71xrAhpuCmKpx5CkW', telefono: '318', rol: { id: 2}},
          ];
    
          await this.userRepository.save(defaultUser);
          console.log('Usuarios SuperAdmin del sistema insertados');
        }
      }  
}

