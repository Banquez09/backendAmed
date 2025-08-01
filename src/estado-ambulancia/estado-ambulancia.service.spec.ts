import { Test, TestingModule } from '@nestjs/testing';
import { EstadoAmbulanciaService } from './estado-ambulancia.service';

describe('EstadoAmbulanciaService', () => {
  let service: EstadoAmbulanciaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstadoAmbulanciaService],
    }).compile();

    service = module.get<EstadoAmbulanciaService>(EstadoAmbulanciaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
