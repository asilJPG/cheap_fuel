import { IsString, IsNotEmpty, IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class CreateGasStationBranchDto {
  @ApiProperty({ example: 1, description: 'Main gas station Id'})
  @IsNumber()
  gas_station_id: number;

  @ApiProperty({ example: 'SomeGasStationBranch', description: 'Gas station branch name'})
  @IsString()
  @IsNotEmpty()
  brach_name: string;

  @ApiProperty({ example: 'somecity, 1-somehome', description: 'Gas station branch address'})
  @IsString()
  address: string;

  @ApiProperty({ example: 'somelocation', description: 'Gas station branch location'})
  @IsString()
  location: string;

  @ApiProperty({ example: '+998979309956', description: 'Gas station branch phone number'})
  @IsString()
  @IsNotEmpty()
  phone_number: string;
}
