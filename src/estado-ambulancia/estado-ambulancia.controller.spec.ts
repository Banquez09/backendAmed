import { Test, TestingModule } from '@nestjs/testing';
import { EstadoAmbulanciaController } from './estado-ambulancia.controller';
import { EstadoAmbulanciaService } from './estado-ambulancia.service';

describe('EstadoAmbulanciaController', () => {
  let controller: EstadoAmbulanciaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstadoAmbulanciaController],
      providers: [EstadoAmbulanciaService],
    }).compile();

    controller = module.get<EstadoAmbulanciaController>(EstadoAmbulanciaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
