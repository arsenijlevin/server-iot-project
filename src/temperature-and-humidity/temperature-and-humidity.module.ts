import { Module } from '@nestjs/common';
import { TemperatureAndHumidityController } from './temperature-and-humidity.controller';
import { TemperatureAndHumidityService } from './temperature-and-humidity.service';

@Module({
  controllers: [TemperatureAndHumidityController],
  providers: [TemperatureAndHumidityService],
})
export class TemperatureAndHumidityModule {}
