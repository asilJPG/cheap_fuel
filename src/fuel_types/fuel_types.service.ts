import { BadRequestException, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateFuelTypeDto } from "./dto/create-fuel_type.dto";
import { UpdateFuelTypeDto } from "./dto/update-fuel_type.dto";
import { FuelType } from "./models/fuel_type.model";

@Injectable()
export class FuelTypeService {
  constructor(
    @InjectModel(FuelType) private fuelTypeRepo: typeof FuelType,
  ){}

  async createFuelType(createFuelTypeDto:CreateFuelTypeDto) {
    const fuelType = await this.fuelTypeRepo.create(createFuelTypeDto);
    return fuelType;
  }

  async getAllFuelTypes():Promise<FuelType[]> {
    const fuelTypes = await this.fuelTypeRepo.findAll({include: {all: true}});
    return fuelTypes;
  }

  async getFuelTypeById(id:number) {
    const fuelType = await this.fuelTypeRepo.findOne({where: {id}, include: {all: true}});
    return fuelType;
  }

  async updateFuelTypeById(id:number, updateFuelTypeDto:UpdateFuelTypeDto):Promise<FuelType> {
    const updateFuelType = await this.fuelTypeRepo.update(updateFuelTypeDto, {where: {id}, returning: true});
    return updateFuelType[1][0].dataValues;
  }

  async deleteFuelTypeById(id:number) {
    const deleteFuelType = await this.fuelTypeRepo.destroy({where: {id}})
    if (!deleteFuelType) {
      throw new HttpException('Fuel type not found!', HttpStatus.NOT_FOUND);
    }
    return {message: "Fuel type has deleted!"};
  }
}