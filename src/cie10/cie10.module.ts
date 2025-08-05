import { Module } from '@nestjs/common';
import { Cie10Service } from './cie10.service';
import { Cie10Controller } from './cie10.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../users/entities/user.entity";
import { Ambulancia } from "../ambulancia/entities/ambulancia.entity";
import { EstadoAmbulancia } from "../estado-ambulancia/entities/estado-ambulancia.entity";
import { AmbulanciaController } from "../ambulancia/ambulancia.controller";
import { AmbulanciaService } from "../ambulancia/ambulancia.service";
import { Cie10 } from "./entities/cie10.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Cie10])],
  controllers: [Cie10Controller],
  providers: [Cie10Service],
})
export class Cie10Module {}