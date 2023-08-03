import { IsString, IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class CreateGasStationDto {
  @ApiProperty({ example: 'SomeGasStation', description: 'Main gas station name'})
  @IsString()
  @IsNotEmpty()
  main_gas_station_name: string;
}
