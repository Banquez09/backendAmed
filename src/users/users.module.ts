import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Rol } from 'src/rol/entities/rol.entity';
import { Ambulancia } from 'src/ambulancia/entities/ambulancia.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SeedUser } from './seed/seed.user';
import { RolModule } from "../rol/rol.module";

@Module({
  imports: [TypeOrmModule.forFeature([User, Rol, Ambulancia]),RolModule],
  controllers: [UsersController],
  providers: [UsersService,SeedUser],
  exports: [UsersService,SeedUser],
})
export class UsersModule {}
