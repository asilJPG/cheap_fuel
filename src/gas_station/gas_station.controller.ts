import {
  Controller, Body, Param,
  Post, Get, Put, Delete,
  HttpCode, HttpException,
  UseGuards
} from '@nestjs/common';
import { GasStationService } from './gas_station.service';
import { CreateGasStationDto } from './dto/create-gas_station.dto';
import { UpdateGasStationDto } from './dto/update-gas_station.dto';
import { GasStation } from './models/gas_station.model';
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";

@ApiTags('Gas Stations')
@Controller('stations')
export class GasStationController {
  constructor(private readonly gasStationService: GasStationService) {}

  @ApiOperation({summary:"Create gas station"})
  @ApiResponse({status: 200, description: 'New gas station', type: [GasStation]})
  @Post()
  async createGasStation(@Body() createGasStationDto: CreateGasStationDto):Promise<GasStation>{
    const gasStation = await this.gasStationService.createGasStation(createGasStationDto);
    return gasStation;
  }

  @ApiOperation({summary:"Get all gas stations"})
  @ApiResponse({status: 200, description: 'List of gas stations', type: [GasStation]})
  @Get()
  async getAllGasStations():Promise<GasStation[]>{
    const gasStations = await this.gasStationService.getAllGasStations();
    return gasStations;
  }

  @ApiOperation({summary:"Get gas station by Id"})
  @ApiResponse({status: 200, description: 'Gas station by Id', type: [GasStation]})
  @Get(':id')
  async getGasStationById(@Param('id') id: string):Promise<GasStation>{
    const gasStation = await this.gasStationService.getGasStationById(+id);
    return gasStation;
  }

  @ApiOperation({summary:"Update gas station by Id"})
  @ApiResponse({status: 200, description: 'Updated gas station', type: [GasStation]})
  @Put(':id')
  async updateGasStationById(@Param('id') id:string, @Body() updateComanyDto: UpdateGasStationDto):Promise<GasStation>{
    const gasStation = await this.gasStationService.updateGasStationById(+id, updateComanyDto);
    return gasStation;
  }

  @ApiOperation({summary:"Delete gas station by Id"})
  @ApiResponse({status: 200, description: 'Deleted gas station', type: [GasStation]})
  @Delete(':id')
  async deleteGasStationById(@Param('id') id: string) {
    const gasStation = await this.gasStationService.deleteGasStationById(+id);
    return gasStation;
  }
}
