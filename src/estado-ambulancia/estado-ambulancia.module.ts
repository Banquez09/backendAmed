import { Module } from '@nestjs/common';
import { EstadoAmbulanciaService } from './estado-ambulancia.service';
import { EstadoAmbulanciaController } from './estado-ambulancia.controller';
import { SeedEstadoAmbulancias } from './seed/seed.estado-ambulancia';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstadoAmbulancia } from './entities/estado-ambulancia.entity';
import { Ambulancia } from 'src/ambulancia/entities/ambulancia.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([EstadoAmbulancia,Ambulancia]) // Registra la entidad y sus repositorios
  ],
  controllers: [EstadoAmbulanciaController],
  providers: [EstadoAmbulanciaService, SeedEstadoAmbulancias],
  exports: [SeedEstadoAmbulancias],
})
export class EstadoAmbulanciaModule {}
