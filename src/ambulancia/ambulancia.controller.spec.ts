import { Test, TestingModule } from '@nestjs/testing';
import { AmbulanciaController } from './ambulancia.controller';
import { AmbulanciaService } from './ambulancia.service';

describe('AmbulanciaController', () => {
  let controller: AmbulanciaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AmbulanciaController],
      providers: [AmbulanciaService],
    }).compile();

    controller = module.get<AmbulanciaController>(AmbulanciaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
