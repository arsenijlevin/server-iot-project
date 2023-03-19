import { Body, Controller, Post } from '@nestjs/common';
import { TemperatureAndHumidityDTO } from './dto/post-temperature-and-humidity.dto';
import { TemperatureAndHumidityService } from './temperature-and-humidity.service';

@Controller('temperature-and-humidity')
export class TemperatureAndHumidityController {
  constructor(
    private temperatureAndHumidityService: TemperatureAndHumidityService,
  ) {}

  @Post('/')
  postTemperatureAndHumidity(
    @Body() temperatureAndHumidityDTO: TemperatureAndHumidityDTO,
  ): TemperatureAndHumidityDTO {
    return this.temperatureAndHumidityService.logTemperatureAndHumidity(
      temperatureAndHumidityDTO,
    );
  }
}
