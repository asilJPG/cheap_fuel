import {
  Controller, Body, Param,
  Post, Get, Put, Delete,
  HttpCode, HttpException,
  UseGuards
} from '@nestjs/common';
import { FuelTypeService } from './fuel_types.service';
import { CreateFuelTypeDto } from './dto/create-fuel_type.dto';
import { UpdateFuelTypeDto } from './dto/update-fuel_type.dto';
import { FuelType } from './models/fuel_type.model';
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";

@ApiTags('Gas Stations')
@Controller('stations')
export class FuelTypeController {
  constructor(private readonly fuelTypeService: FuelTypeService) {}

  @ApiOperation({summary:"Create fuel type"})
  @ApiResponse({status: 200, description: 'New fuel type', type: [FuelType]})
  @Post()
  async createFuelType(@Body() createFuelTypeDto: CreateFuelTypeDto):Promise<FuelType>{
    const fuelType = await this.fuelTypeService.createFuelType(createFuelTypeDto);
    return fuelType;
  }

  @ApiOperation({summary:"Get all fuel types"})
  @ApiResponse({status: 200, description: 'List of fuel types', type: [FuelType]})
  @Get()
  async getAllFuelTypes():Promise<FuelType[]>{
    const fuelTypes = await this.fuelTypeService.getAllFuelTypes();
    return fuelTypes;
  }

  // @UseGuards(FuelTypeSelfGuard)
  @ApiOperation({summary:"Get fuel type by Id"})
  @ApiResponse({status: 200, description: 'Gas station by Id', type: [FuelType]})
  @Get(':id')
  async getFuelTypeById(@Param('id') id: string):Promise<FuelType>{
    const fuelType = await this.fuelTypeService.getFuelTypeById(+id);
    return fuelType;
  }

  @ApiOperation({summary:"Update fuel type by Id"})
  @ApiResponse({status: 200, description: 'Updated fuel type', type: [FuelType]})
  @Put(':id')
  async updateFuelTypeById(@Param('id') id:string, @Body() updateComanyDto: UpdateFuelTypeDto):Promise<FuelType>{
    const fuelType = await this.fuelTypeService.updateFuelTypeById(+id, updateComanyDto);
    return fuelType;
  }

  @ApiOperation({summary:"Delete fuel type by Id"})
  @ApiResponse({status: 200, description: 'Deleted fuel type', type: [FuelType]})
  @Delete(':id')
  async deleteFuelTypeById(@Param('id') id: string) {
    const fuelType = await this.fuelTypeService.deleteFuelTypeById(+id);
    return fuelType;
  }
}
