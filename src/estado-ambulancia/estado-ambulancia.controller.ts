import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { EstadoAmbulanciaService } from './estado-ambulancia.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('estado-ambulancia')
@Controller('estado-ambulancia')
export class EstadoAmbulanciaController {
  constructor(private readonly estadoAmbulanciaService: EstadoAmbulanciaService) {}

  @Get()
  //@ApiBearerAuth()
  //@UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.estadoAmbulanciaService.findAll();
  }

  @Get(':id')
  //@ApiBearerAuth()
  //@UseGuards(AuthGuard('jwt'))
  findOne(@Param('id') id: string) {
    return this.estadoAmbulanciaService.findOne(+id);
  }
}
