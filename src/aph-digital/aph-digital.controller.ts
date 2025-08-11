import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  ParseIntPipe,
  Query,
  UseGuards, Request
} from "@nestjs/common";
import { AphDigitalService } from './aph-digital.service';
import { CreateAphDigitalDto } from './dto/create-aph-digital.dto';
import { UpdateAphDigitalDto } from './dto/update-aph-digital.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";

@ApiTags('aph-digital')
@Controller('aph-digital')
export class AphDigitalController {
  constructor(private readonly aphDigitalService: AphDigitalService) {}


  @Post()
  @ApiOperation({ summary: 'Create a new APH Digital form' })
  @ApiResponse({ status: 201, description: 'The APH form has been successfully created.' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  create(@Body(ValidationPipe) createMedicalFormDto: CreateAphDigitalDto, @Request() req: any) {
    createMedicalFormDto.idUsuarioCreador =req.user?.userId;
    return this.aphDigitalService.create(createMedicalFormDto);
  }

  @Get()
  findAll(@Query() filters?: {
    fechaInicio?: string;
    fechaFin?: string;
    nombrePaciente?: string;
    placa?: string;
    eps?: string;
    tipoServicio?: 'ambulanciaBasica' | 'medicalizado' | 'consultaMedica';
  }) {
    if (filters && Object.keys(filters).length > 0) {
      const processedFilters = {
        ...filters,
        fechaInicio: filters.fechaInicio ? new Date(filters.fechaInicio) : undefined,
        fechaFin: filters.fechaFin ? new Date(filters.fechaFin) : undefined,
      };
      return this.aphDigitalService.findWithFilters(processedFilters);
    }
    return this.aphDigitalService.findAll();
  }

  @Get('numero/:numeroFormulario')
  findByNumero(@Param('numeroFormulario') numeroFormulario: string) {
    return this.aphDigitalService.findByNumeroFormulario(numeroFormulario);
  }

  @Get('paciente/:nombrePaciente')
  findByPaciente(@Param('nombrePaciente') nombrePaciente: string) {
    return this.aphDigitalService.findByPaciente(nombrePaciente);
  }

  @Get('fecha/:fecha')
  findByFecha(@Param('fecha') fecha: string) {
    return this.aphDigitalService.findByFecha(new Date(fecha));
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.aphDigitalService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updateMedicalFormDto: UpdateAphDigitalDto,
  ) {
    return this.aphDigitalService.update(id, updateMedicalFormDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.aphDigitalService.remove(id);
  
  }
}
