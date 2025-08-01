import { Module } from '@nestjs/common';
import { RolService } from './rol.service';
import { RolController } from './rol.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Rol } from './entities/rol.entity';
import { SeedRol } from './seed/seed.rol';

@Module({
  imports: [TypeOrmModule.forFeature([User, Rol])],
  controllers: [RolController],
  providers: [RolService,SeedRol],
  exports: [SeedRol],
})
export class RolModule {}
