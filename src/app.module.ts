import { Module } from '@nestjs/common';
import { TemperatureAndHumidityModule } from './temperature-and-humidity/temperature-and-humidity.module';

@Module({
  imports: [TemperatureAndHumidityModule],
})
export class AppModule {}
