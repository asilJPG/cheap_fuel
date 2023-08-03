import { IsString, IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class CreateFuelTypeDto {
  @ApiProperty({ example: 'sometype', description: 'Fuel type name'})
  @IsString()
  @IsNotEmpty()
  name: string;
}
