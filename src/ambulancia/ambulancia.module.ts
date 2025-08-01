import { Module } from '@nestjs/common';
import { AmbulanciaService } from './ambulancia.service';
import { AmbulanciaController } from './ambulancia.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Ambulancia } from './entities/ambulancia.entity';
import { EstadoAmbulancia } from 'src/estado-ambulancia/entities/estado-ambulancia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Ambulancia,EstadoAmbulancia])],
  controllers: [AmbulanciaController],
  providers: [AmbulanciaService],
})
export class AmbulanciaModule {}
