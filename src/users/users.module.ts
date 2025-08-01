import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Rol } from 'src/rol/entities/rol.entity';
import { Ambulancia } from 'src/ambulancia/entities/ambulancia.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SeedUser } from './seed/seed.user';

@Module({
  imports: [TypeOrmModule.forFeature([User, Rol, Ambulancia])],
  controllers: [UsersController],
  providers: [UsersService,SeedUser],
  exports: [SeedUser],
})
export class UsersModule {}
