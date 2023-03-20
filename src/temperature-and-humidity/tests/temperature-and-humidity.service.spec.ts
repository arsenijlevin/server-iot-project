import { Test, TestingModule } from '@nestjs/testing';
import { TemperatureAndHumidityService } from '../temperature-and-humidity.service';

describe('TemperatureAndHumidityService', () => {
  let service: TemperatureAndHumidityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TemperatureAndHumidityService],
    }).compile();

    service = module.get<TemperatureAndHumidityService>(
      TemperatureAndHumidityService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
