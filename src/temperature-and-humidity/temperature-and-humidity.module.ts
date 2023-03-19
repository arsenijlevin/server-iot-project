import { Module } from '@nestjs/common';
import { TemperatureAndHumidityService } from './temperature-and-humidity.service';

@Module({
  providers: [TemperatureAndHumidityService],
})
export class TemperatureAndHumidityModule {}
