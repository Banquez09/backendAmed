import { Injectable } from '@nestjs/common';
import { CreateCie10Dto } from './dto/create-cie10.dto';
import { UpdateCie10Dto } from './dto/update-cie10.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Cie10 } from './entities/cie10.entity';

@Injectable()
export class Cie10Service {

  constructor(
    @InjectRepository(Cie10)
    private readonly cie10Repo: Repository<Cie10>,
  ) {}
   async create(dto: CreateCie10Dto) {
    const nuevo = this.cie10Repo.create(dto);
    return this.cie10Repo.save(nuevo);
  }

   async findAll(options: { page?: number; limit?: number; search?: string }) {
    const { page = 1, limit = 10, search = '' } = options;
    const skip = (page - 1) * limit;

    const [data, total] = await this.cie10Repo.findAndCount({
      where: [
        { codigo: Like(`%${search}%`) },
        { nombre: Like(`%${search}%`) },
        { descripcion: Like(`%${search}%`) },
      ],
      order: { nombre: 'ASC' },
      take: limit,
      skip,
    });

     return {
      total,
      page,
      limit,
      data,
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} cie10`;
  }

  update(id: number, updateCie10Dto: UpdateCie10Dto) {
    return `This action updates a #${id} cie10`;
  }

  remove(id: number) {
    return `This action removes a #${id} cie10`;
  }
}
