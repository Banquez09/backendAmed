import { Test, TestingModule } from '@nestjs/testing';
import { SeedUser } from './seed.user';

describe('SeedService', () => {
  let service: SeedUser;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeedUser],
    }).compile();

    service = module.get<SeedUser>(SeedUser);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
