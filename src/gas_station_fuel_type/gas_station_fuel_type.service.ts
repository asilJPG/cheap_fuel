import { BadRequestException, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateGasStationFuelTypeDto } from "./dto/create-gas_station_fuel_type.dto";
import { UpdateGasStationFuelTypeDto } from "./dto/update-gas_station_fuel_type.dto";
import { GasStationFuelType } from "./model/gas_station_fuel_type.model";

@Injectable()
export class GasStationFuelTypeService {
  constructor(
    @InjectModel(GasStationFuelType) private gasStationFuelTypeRepo: typeof GasStationFuelType,
  ){}

  async createGasStationFuelType(createGasStationFuelTypeDto:CreateGasStationFuelTypeDto) {
    const gasStationFuelType = await this.gasStationFuelTypeRepo.create(createGasStationFuelTypeDto);
    return gasStationFuelType;
  }

  async getAllGasStationFuelTypes():Promise<GasStationFuelType[]> {
    const gasStationFuelTypes = await this.gasStationFuelTypeRepo.findAll({include: {all: true}});
    return gasStationFuelTypes;
  }

  async getGasStationFuelTypeById(id:number) {
    const gasStationFuelType = await this.gasStationFuelTypeRepo.findOne({where: {id}, include: {all: true}});
    return gasStationFuelType;
  }

  async updateGasStationFuelTypeById(id:number, updateGasStationFuelTypeDto:UpdateGasStationFuelTypeDto):Promise<GasStationFuelType> {
    const updateGasStationFuelType = await this.gasStationFuelTypeRepo.update(updateGasStationFuelTypeDto, {where: {id}, returning: true});
    return updateGasStationFuelType[1][0].dataValues;
  }

  async deleteGasStationFuelTypeById(id:number) {
    const deleteGasStationFuelType = await this.gasStationFuelTypeRepo.destroy({where: {id}})
    if (!deleteGasStationFuelType) {
      throw new HttpException('Fuel not found!', HttpStatus.NOT_FOUND);
    }
    return {message: "Fuel has deleted!"};
  }
}