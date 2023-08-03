import {
  Controller,
  Body,
  Param,
  Post,
  Get,
  Put,
  Delete,
  HttpCode,
  HttpException,
  UseGuards,
} from '@nestjs/common';
import { GasStationFuelTypeService } from './gas_station_fuel_type.service';
import { CreateGasStationFuelTypeDto } from './dto/create-gas_station_fuel_type.dto';
import { UpdateGasStationFuelTypeDto } from './dto/update-gas_station_fuel_type.dto';
import { GasStationFuelType } from './model/gas_station_fuel_type.model';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Stations')
@Controller('stations')
export class GasStationFuelTypeController {
  constructor(
    private readonly gasStationFuelTypeService: GasStationFuelTypeService,
  ) {}

  @ApiOperation({ summary: 'Create fuel' })
  @ApiResponse({
    status: 200,
    description: 'New fuel',
    type: [GasStationFuelType],
  })
  @Post()
  async createGasStationFuelType(
    @Body() createGasStationFuelTypeDto: CreateGasStationFuelTypeDto,
  ): Promise<GasStationFuelType> {
    const gasStationFuelType =
      await this.gasStationFuelTypeService.createGasStationFuelType(
        createGasStationFuelTypeDto,
      );
    return gasStationFuelType;
  }

  @ApiOperation({ summary: 'Get all fuels' })
  @ApiResponse({
    status: 200,
    description: 'List of fuels',
    type: [GasStationFuelType],
  })
  @Get()
  async getAllGasStationFuelTypes(): Promise<GasStationFuelType[]> {
    const gasStationFuelTypes =
      await this.gasStationFuelTypeService.getAllGasStationFuelTypes();
    return gasStationFuelTypes;
  }

  @ApiOperation({ summary: 'Get fuel by Id' })
  @ApiResponse({
    status: 200,
    description: 'Gas station by Id',
    type: [GasStationFuelType],
  })
  @Get(':id')
  async getGasStationFuelTypeById(
    @Param('id') id: string,
  ): Promise<GasStationFuelType> {
    const gasStationFuelType =
      await this.gasStationFuelTypeService.getGasStationFuelTypeById(+id);
    return gasStationFuelType;
  }

  @ApiOperation({ summary: 'Update fuel by Id' })
  @ApiResponse({
    status: 200,
    description: 'Updated fuel',
    type: [GasStationFuelType],
  })
  @Put(':id')
  async updateGasStationFuelTypeById(
    @Param('id') id: string,
    @Body() updateComanyDto: UpdateGasStationFuelTypeDto,
  ): Promise<GasStationFuelType> {
    const gasStationFuelType =
      await this.gasStationFuelTypeService.updateGasStationFuelTypeById(
        +id,
        updateComanyDto,
      );
    return gasStationFuelType;
  }

  @ApiOperation({ summary: 'Delete fuel by Id' })
  @ApiResponse({
    status: 200,
    description: 'Deleted fuel',
    type: [GasStationFuelType],
  })
  @Delete(':id')
  async deleteGasStationFuelTypeById(@Param('id') id: string) {
    const gasStationFuelType =
      await this.gasStationFuelTypeService.deleteGasStationFuelTypeById(+id);
    return gasStationFuelType;
  }
}
