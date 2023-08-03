import { IsString, IsNotEmpty, IsNumber, IsBoolean } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateGasStationFuelTypeDto {
  @ApiProperty({ example: 1, description: 'Gas station branch Id'})
  @IsNumber()
  gas_station_branch_id: number;

  @ApiProperty({ example: 1, description: 'Fuel type Id'})
  @IsNumber()
  fuel_type_id: number;

  @ApiProperty({ example: 10000.00, description: 'Fuel price'})
  @IsNumber()
  price: number;

  @ApiProperty({ example: true, description: 'Fuel existance'})
  @IsBoolean()
  is_has: boolean;
}
