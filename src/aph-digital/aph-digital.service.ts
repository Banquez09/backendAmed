import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAphDigitalDto } from './dto/create-aph-digital.dto';
import { UpdateAphDigitalDto } from './dto/update-aph-digital.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AphDigital } from './entities/aph-digital.entity';
import { Repository } from 'typeorm';
import { BitacorasService } from "../bitacoras/bitacoras.service";
import { UsersService } from "../users/users.service";

@Injectable()
export class AphDigitalService {
  constructor(
    @InjectRepository(AphDigital)
    private AphDigitalRepository: Repository<AphDigital>,
    private readonly bitacorasService: BitacorasService,
    private readonly usuarioService: UsersService,
  ) {}

  async create(createAphDigitalDto: CreateAphDigitalDto): Promise<AphDigital> {
    return await this.AphDigitalRepository.manager.transaction(async (manager) => {
      // 1. Crear y guardar el registro inicial
      const aphDigital = manager.create(AphDigital, createAphDigitalDto);
      const savedAph = await manager.save(aphDigital);

      // 2. Actualizar con el numeroFormulario
      savedAph.numeroFormulario = `${savedAph.id}`;
      const finalAph = await manager.save(savedAph);

      // 3. Preparar datos para bitácora
      const fechaDate = new Date(finalAph.fecha);

      const bitacoraData = {
        radioOperador: "JUAN MANUEL ARRIETA",
        entidad: finalAph.eps,
        arl: finalAph.arl,
        contacto: finalAph.tel,
        nombrePaciente: finalAph.nombrePaciente,
        tipoDocumento: finalAph.tipoDocumento,
        documento: finalAph.identificacion,
        nombreAcompanante: finalAph.acompanante,
        fechaTraslado: fechaDate.toDateString(),
        horaTraslado: fechaDate.getTime().toString(),
        origen: finalAph.direccionServicio,
        destino: finalAph.destinoPaciente,
        tipoTraslado: finalAph.servicioSimple ? 'Simple' :
          finalAph.redondo ? 'Redondo' :
            finalAph.fallido ? 'Fallido' :
              'No especificado',
        conductor: finalAph.nombreConductor,
        paramedico: "",
        diagnostico: finalAph.diagnostico,
        evolucion: finalAph.notaEvolucion,
        codigo: "",
        mv: "",
        medico: "",
        observacion: "",
        valor: 0,
        noPlanilla: finalAph.numeroFormulario,
      };

      // 4. Guardar en bitácora
      await this.bitacorasService.create(bitacoraData);

      return finalAph;
    });
  }

  async findAll(): Promise<AphDigital[]> {
    return await this.AphDigitalRepository.find({
      order: { createdAt: 'DESC' }
    });
  }

  async findOne(id: number): Promise<any> {
    const aphDigital = await this.AphDigitalRepository.findOne({ where: { id } });

    if (!aphDigital) {
      throw new NotFoundException(`Formulario médico con ID ${id} no encontrado`);
    }

    // Buscar el usuario por el idUsuarioCreador
    const usuario = await this.usuarioService.findOne(
      aphDigital.idUsuarioCreador
    );

    return {
      ...aphDigital,
      firmaFuncionarioAmed: usuario?.firma || null, // Adjuntamos firma a la respuesta
    };
  }


  async findByNumeroFormulario(numeroFormulario: string): Promise<AphDigital> {
    const AphDigital = await this.AphDigitalRepository.findOne({
      where: { numeroFormulario }
    });
    
    if (!AphDigital) {
      throw new NotFoundException(`Formulario médico con número ${numeroFormulario} no encontrado`);
    }
    
    return AphDigital;
  }

  async findByPaciente(nombrePaciente: string): Promise<AphDigital[]> {
    return await this.AphDigitalRepository.find({
      where: { nombrePaciente },
      order: { createdAt: 'DESC' }
    });
  }

  async findByFecha(fecha: Date): Promise<AphDigital[]> {
    return await this.AphDigitalRepository.find({
      where: { fecha },
      order: { createdAt: 'DESC' }
    });
  }

  async update(id: number, updateAphDigitalDto: UpdateAphDigitalDto): Promise<AphDigital> {
    const AphDigital = await this.findOne(id);
    
    Object.assign(AphDigital, updateAphDigitalDto);
    
    return await this.AphDigitalRepository.save(AphDigital);
  }

  async remove(id: number): Promise<void> {
    const AphDigital = await this.findOne(id);
    await this.AphDigitalRepository.remove(AphDigital);
  }

  async findWithFilters(filters: {
    fechaInicio?: Date;
    fechaFin?: Date;
    nombrePaciente?: string;
    placa?: string;
    eps?: string;
    tipoServicio?: 'ambulanciaBasica' | 'medicalizado' | 'consultaMedica';
  }): Promise<AphDigital[]> {
    const query = this.AphDigitalRepository.createQueryBuilder('AphDigital');

    if (filters.fechaInicio) {
      query.andWhere('AphDigital.fecha >= :fechaInicio', { fechaInicio: filters.fechaInicio });
    }

    if (filters.fechaFin) {
      query.andWhere('AphDigital.fecha <= :fechaFin', { fechaFin: filters.fechaFin });
    }

    if (filters.nombrePaciente) {
      query.andWhere('AphDigital.nombrePaciente ILIKE :nombrePaciente', {
        nombrePaciente: `%${filters.nombrePaciente}%`
      });
    }

    if (filters.placa) {
      query.andWhere('AphDigital.placa ILIKE :placa', {
        placa: `%${filters.placa}%`
      });
    }

    if (filters.eps) {
      query.andWhere('AphDigital.eps ILIKE :eps', {
        eps: `%${filters.eps}%`
      });
    }

    if (filters.tipoServicio) {
      query.andWhere(`AphDigital.${filters.tipoServicio} = :tipoServicio`, {
        tipoServicio: true
      });
    }

    return await query.orderBy('AphDigital.createdAt', 'DESC').getMany();
  }
}
