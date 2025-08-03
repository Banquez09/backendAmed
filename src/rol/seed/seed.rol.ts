import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rol } from '../entities/rol.entity';

@Injectable()
export class SeedRol {

    constructor(
        @InjectRepository(Rol)
        private rolRepository: Repository<Rol>,
      ) {}

      async seedRol() {
        // Verifica si los roles ya existen
        const count = await this.rolRepository.count();
        if (count === 0) {
          const defaultRoles = [
            { nombre: 'SuperAdmin', descripcion: 'Super Administrador del sistema (Propietarios)'},
            { nombre: 'Admin', descripcion: 'Administrador del sistema (Usuario)'},
            // { nombre: 'Medico', descripcion: 'Medico asociado a la ambulancia'},
            // { nombre: 'Paramedico', descripcion: 'Paramedico de la ambulancia'},
            // { nombre: 'Conductor', descripcion: 'Conductor Ambulancia'},
            // { nombre: 'Auditor', descripcion: 'Auditor del sistema'},
            // { nombre: 'IPS', descripcion: 'Ips donde llegaran o saldran los pacientes'},
            { nombre: 'Usuario', descripcion: 'Ips donde llegaran o saldran los pacientes'},
          ];
    
          await this.rolRepository.save(defaultRoles);
          console.log('Roles del sistema por defecto insertados');
        }
      }  
}
