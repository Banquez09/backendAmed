import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import * as dotenv from 'dotenv';
import { SeedEstadoAmbulancias } from './estado-ambulancia/seed/seed.estado-ambulancia';
import { SeedRol } from './rol/seed/seed.rol';
import { SeedUser } from './users/seed/seed.user';
import { IoAdapter } from '@nestjs/platform-socket.io';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

//SEEDERS ESTADO AMBULANCIA
  const EstadoAmbulancias = app.get(SeedEstadoAmbulancias);
  await EstadoAmbulancias.seedEstadoAmbulancias(); // Ejecuta el seeder al iniciar

//SEEDERS ROL
  const Roles = app.get(SeedRol);
  await Roles.seedRol(); // Ejecuta el seeder al iniciar

  //SEEDERS USUARIOS
  const Usuarios = app.get(SeedUser);
  await Usuarios.seedUser(); // Ejecuta el seeder al iniciar

  const options = new DocumentBuilder()
  .setTitle('Backend Sistema de Traslados')
  .setDescription('Documentacion de la API del Sistema de Traslados')
  .setVersion('1.0')
  .addBearerAuth()
  .build();

  const document = SwaggerModule.createDocument(app,options);
  SwaggerModule.setup('/', app, document);

  app.enableCors();
  
  await app.listen(process.env.PORT || 3001);
}
bootstrap();
