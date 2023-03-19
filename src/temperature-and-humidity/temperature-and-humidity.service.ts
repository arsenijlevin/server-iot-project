import { Injectable } from '@nestjs/common';
import { TemperatureAndHumidityDTO } from './dto/post-temperature-and-humidity.dto';

@Injectable()
export class TemperatureAndHumidityService {
  logTemperatureAndHumidity(
    temperatureAndHumidityDTO: TemperatureAndHumidityDTO,
  ) {
    console.log(`
    Humidity: ${temperatureAndHumidityDTO.humidity}
    Temperature: ${temperatureAndHumidityDTO.temperature}
    -------------------------------`);
  }
}
