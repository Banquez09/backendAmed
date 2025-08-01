import { Test, TestingModule } from '@nestjs/testing';
import { AmbulanciaService } from './ambulancia.service';

describe('AmbulanciaService', () => {
  let service: AmbulanciaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AmbulanciaService],
    }).compile();

    service = module.get<AmbulanciaService>(AmbulanciaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
