import { Module } from '@nestjs/common';
import { BitacorasService } from './bitacoras.service';
import { BitacorasController } from './bitacoras.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Bitacora } from "./entities/bitacora.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Bitacora])],
  controllers: [BitacorasController],
  providers: [BitacorasService],
  exports: [BitacorasService],
})
export class BitacorasModule {}
