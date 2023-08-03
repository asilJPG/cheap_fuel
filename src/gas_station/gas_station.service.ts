import { BadRequestException, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateGasStationDto } from "./dto/create-gas_station.dto";
import { UpdateGasStationDto } from "./dto/update-gas_station.dto";
import { GasStation } from "./models/gas_station.model";

@Injectable()
export class GasStationService {
  constructor(
    @InjectModel(GasStation) private gasStationRepo: typeof GasStation,
  ){}

  async createGasStation(createGasStationDto:CreateGasStationDto) {
    const gasStation = await this.gasStationRepo.create(createGasStationDto);
    return gasStation;
  }

  async getAllGasStations():Promise<GasStation[]> {
    const gasStations = await this.gasStationRepo.findAll({include: {all: true}});
    return gasStations;
  }

  async getGasStationById(id:number) {
    const gasStation = await this.gasStationRepo.findOne({where: {id}, include: {all: true}});
    return gasStation;
  }

  async updateGasStationById(id:number, updateGasStationDto:UpdateGasStationDto):Promise<GasStation> {
    const updateGasStation = await this.gasStationRepo.update(updateGasStationDto, {where: {id}, returning: true});
    return updateGasStation[1][0].dataValues;
  }

  async deleteGasStationById(id:number) {
    const deleteGasStation = await this.gasStationRepo.destroy({where: {id}})
    if (!deleteGasStation) {
      throw new HttpException('GasStation not found!', HttpStatus.NOT_FOUND);
    }
    return {message: "GasStation has deleted!"};
  }
}