import { Test, TestingModule } from '@nestjs/testing';
import { SeedRol } from './seed.rol';

describe('SeedService', () => {
  let service: SeedRol;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeedRol],
    }).compile();

    service = module.get<SeedRol>(SeedRol);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
