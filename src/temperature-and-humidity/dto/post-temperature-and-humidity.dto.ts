import { IsNotEmpty, IsNumber, Min } from 'class-validator';

export class TemperatureAndHumidityDTO {
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  temperature: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  humidity: number;
}
