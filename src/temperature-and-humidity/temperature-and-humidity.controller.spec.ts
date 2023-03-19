import { Test, TestingModule } from '@nestjs/testing';
import { TemperatureAndHumidityController } from './temperature-and-humidity.controller';

describe('TemperatureAndHumidityController', () => {
  let controller: TemperatureAndHumidityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TemperatureAndHumidityController],
    }).compile();

    controller = module.get<TemperatureAndHumidityController>(
      TemperatureAndHumidityController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
