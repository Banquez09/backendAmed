import { Injectable } from '@nestjs/common';
import { CreateBitacoraDto } from './dto/create-bitacora.dto';
import { UpdateBitacoraDto } from './dto/update-bitacora.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Bitacora } from "./entities/bitacora.entity";
import { Repository } from "typeorm";

@Injectable()
export class BitacorasService {
  constructor(
    @InjectRepository(Bitacora)
    private bitacoraRepository: Repository<Bitacora>,
  ) {}

  create(createBitacoraDto: CreateBitacoraDto) {
    return this.bitacoraRepository.save(createBitacoraDto);
  }

  async findAll() {
    const data = await this.bitacoraRepository.find();

    if (data.length === 0) {
      return {
        message: 'No hay registros disponibles',
        data: [],
        count: 0
      };
    }

    return {
      message: 'Registros encontrados',
      data,
      count: data.length
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} bitacora`;
  }

  update(id: number, updateBitacoraDto: UpdateBitacoraDto) {
    return `This action updates a #${id} bitacora`;
  }

  remove(id: number) {
    return `This action removes a #${id} bitacora`;
  }
}
