import { Module } from '@nestjs/common';
import { AphDigitalService } from './aph-digital.service';
import { AphDigitalController } from './aph-digital.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AphDigital } from './entities/aph-digital.entity';
import { BitacorasModule } from "../bitacoras/bitacoras.module";
import { Bitacora } from "../bitacoras/entities/bitacora.entity";

@Module({
  imports: [TypeOrmModule.forFeature([AphDigital,Bitacora]),BitacorasModule],
  controllers: [AphDigitalController],
  providers: [AphDigitalService],
  exports: [AphDigitalService],
})
export class AphDigitalModule {}
