import { IsNotEmpty, IsNumber } from 'class-validator';

export class TemperatureAndHumidityDTO {
  @IsNumber()
  @IsNotEmpty()
  temperature: number;

  @IsNotEmpty()
  @IsNumber()
  humidity: number;
}
