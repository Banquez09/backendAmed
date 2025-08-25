import { Module } from '@nestjs/common';
import { AphDigitalService } from './aph-digital.service';
import { AphDigitalController } from './aph-digital.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AphDigital } from './entities/aph-digital.entity';
import { BitacorasModule } from "../bitacoras/bitacoras.module";
import { Bitacora } from "../bitacoras/entities/bitacora.entity";
import { User } from "../users/entities/user.entity";
import { UsersModule } from "../users/users.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([AphDigital, Bitacora, User]),
    BitacorasModule,UsersModule
  ],
  controllers: [AphDigitalController],
  providers: [AphDigitalService],
  exports: [AphDigitalService],
})
export class AphDigitalModule {}
