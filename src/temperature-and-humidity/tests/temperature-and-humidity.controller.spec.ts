import { Test, TestingModule } from '@nestjs/testing';
import { TemperatureAndHumidityDTO } from '../dto/post-temperature-and-humidity.dto';
import { TemperatureAndHumidityController } from '../temperature-and-humidity.controller';
import { TemperatureAndHumidityService } from '../temperature-and-humidity.service';

describe('TemperatureAndHumidityController', () => {
  let temperatureAndHumidityController: TemperatureAndHumidityController;
  let temperatureAndHumidityService: TemperatureAndHumidityService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
        controllers: [TemperatureAndHumidityController],
        providers: [TemperatureAndHumidityService],
      }).compile();

      temperatureAndHumidityController = moduleRef.get<TemperatureAndHumidityController>(TemperatureAndHumidityController);
      temperatureAndHumidityService = moduleRef.get<TemperatureAndHumidityService>(TemperatureAndHumidityService);
  });

  it('should be defined', () => {
    expect(temperatureAndHumidityController).toBeDefined();
  });

  describe('logTemperatureAndHumidity', () => {
    it('should return logged temperature and humidity', async () => {
      const result = {
        temperature: 10,
        humidity: 5,
      };
      jest.spyOn(temperatureAndHumidityService, 'logTemperatureAndHumidity').mockImplementation(() => result);

      expect(temperatureAndHumidityController.postTemperatureAndHumidity(result)).toBe(result);
    });
  });
});
