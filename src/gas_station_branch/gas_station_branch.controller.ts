import {
  Controller, Body, Param,
  Post, Get, Put, Delete,
  HttpCode, HttpException,
  UseGuards
} from '@nestjs/common';
import { GasStationBranchService } from './gas_station_branch.service';
import { CreateGasStationBranchDto } from './dto/create-gas_station_branch.dto';
import { UpdateGasStationBranchDto } from './dto/update-gas_station_branch.dto';
import { GasStationBranch } from './models/gas_station_branch.model';
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";

@ApiTags('Gas Stations')
@Controller('stations')
export class GasStationBranchController {
  constructor(private readonly gasStationBranchService: GasStationBranchService) {}

  @ApiOperation({summary:"Create gas station brach"})
  @ApiResponse({status: 200, description: 'New gas station brach', type: [GasStationBranch]})
  @Post()
  async createGasStationBranch(@Body() createGasStationBranchDto: CreateGasStationBranchDto):Promise<GasStationBranch>{
    const gasStationBranch = await this.gasStationBranchService.createGasStationBranch(createGasStationBranchDto);
    return gasStationBranch;
  }

  @ApiOperation({summary:"Get all gas station brachs"})
  @ApiResponse({status: 200, description: 'List of gas station brachs', type: [GasStationBranch]})
  @Get()
  async getAllGasStationBranchs():Promise<GasStationBranch[]>{
    const gasStationBranchs = await this.gasStationBranchService.getAllGasStationBranchs();
    return gasStationBranchs;
  }

  // @UseGuards(GasStationBranchSelfGuard)
  @ApiOperation({summary:"Get gas station brach by Id"})
  @ApiResponse({status: 200, description: 'Gas station branch by Id', type: [GasStationBranch]})
  @Get(':id')
  async getGasStationBranchById(@Param('id') id: string):Promise<GasStationBranch>{
    const gasStationBranch = await this.gasStationBranchService.getGasStationBranchById(+id);
    return gasStationBranch;
  }

  @ApiOperation({summary:"Update gas station brach by Id"})
  @ApiResponse({status: 200, description: 'Updated gas station brach', type: [GasStationBranch]})
  @Put(':id')
  async updateGasStationBranchById(@Param('id') id:string, @Body() updateComanyDto: UpdateGasStationBranchDto):Promise<GasStationBranch>{
    const gasStationBranch = await this.gasStationBranchService.updateGasStationBranchById(+id, updateComanyDto);
    return gasStationBranch;
  }

  @ApiOperation({summary:"Delete gas station brach by Id"})
  @ApiResponse({status: 200, description: 'Deleted gas station brach', type: [GasStationBranch]})
  @Delete(':id')
  async deleteGasStationBranchById(@Param('id') id: string) {
    const gasStationBranch = await this.gasStationBranchService.deleteGasStationBranchById(+id);
    return gasStationBranch;
  }
}
