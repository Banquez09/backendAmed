import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { Cie10Service } from './cie10.service';
import { CreateCie10Dto } from './dto/create-cie10.dto';
import { UpdateCie10Dto } from './dto/update-cie10.dto';
import { ApiTags } from "@nestjs/swagger";

@ApiTags('cie10')
@Controller('cie10')
export class Cie10Controller {
  constructor(private readonly cie10Service: Cie10Service) {}

  @Post()
  create(@Body() dto: CreateCie10Dto) {
    return this.cie10Service.create(dto);
  }
  @Get()
  findAll(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('search') search?: string,
  ) {
    const pageNum = page ? parseInt(page, 10) : 1;
    const limitNum = limit ? parseInt(limit, 10) : 10;
    const searchTerm = search || '';

    return this.cie10Service.findAll({
      page: pageNum,
      limit: limitNum,
      search: searchTerm
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cie10Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCie10Dto: UpdateCie10Dto) {
    return this.cie10Service.update(+id, updateCie10Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cie10Service.remove(+id);
  }
}