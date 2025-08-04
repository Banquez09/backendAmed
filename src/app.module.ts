import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { UsersModule } from './users/users.module';
import { AmbulanciaModule } from './ambulancia/ambulancia.module';
import { RolModule } from './rol/rol.module';
import { AuthModule } from './auth/auth.module';
import { EstadoAmbulanciaModule } from './estado-ambulancia/estado-ambulancia.module';
import { SolicitudesModule } from './solicitud/solicitud.module';
import { AphDigitalModule } from './aph-digital/aph-digital.module';
import { Cie10Module } from './cie10/cie10.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    UsersModule,
    AmbulanciaModule,
    RolModule,
    AuthModule,
    EstadoAmbulanciaModule,
    SolicitudesModule,
    AphDigitalModule,
    Cie10Module,
  ],
})
export class AppModule {}
