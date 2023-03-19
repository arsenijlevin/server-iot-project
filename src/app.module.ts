import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TemperatureAndHumidityController } from './temperature-and-humidity/temperature-and-humidity.controller';
import { TemperatureAndHumidityModule } from './temperature-and-humidity/temperature-and-humidity.module';

@Module({
  imports: [TemperatureAndHumidityModule],
  controllers: [AppController, TemperatureAndHumidityController],
  providers: [AppService],
})
export class AppModule {}
