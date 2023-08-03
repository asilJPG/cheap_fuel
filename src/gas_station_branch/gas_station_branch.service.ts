import { BadRequestException, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateGasStationBranchDto } from "./dto/create-gas_station_branch.dto";
import { UpdateGasStationBranchDto } from "./dto/update-gas_station_branch.dto";
import { GasStationBranch } from "./models/gas_station_branch.model";

@Injectable()
export class GasStationBranchService {
  constructor(
    @InjectModel(GasStationBranch) private gasStationBranchRepo: typeof GasStationBranch,
  ){}

  async createGasStationBranch(createGasStationBranchDto:CreateGasStationBranchDto) {
    const gasStationBranch = await this.gasStationBranchRepo.create(createGasStationBranchDto);
    return gasStationBranch;
  }

  async getAllGasStationBranchs():Promise<GasStationBranch[]> {
    const gasStationBranchs = await this.gasStationBranchRepo.findAll({include: {all: true}});
    return gasStationBranchs;
  }

  async getGasStationBranchById(id:number) {
    const gasStationBranch = await this.gasStationBranchRepo.findOne({where: {id}, include: {all: true}});
    return gasStationBranch;
  }

  async updateGasStationBranchById(id:number, updateGasStationBranchDto:UpdateGasStationBranchDto):Promise<GasStationBranch> {
    const updateGasStationBranch = await this.gasStationBranchRepo.update(updateGasStationBranchDto, {where: {id}, returning: true});
    return updateGasStationBranch[1][0].dataValues;
  }

  async deleteGasStationBranchById(id:number) {
    const deleteGasStationBranch = await this.gasStationBranchRepo.destroy({where: {id}})
    if (!deleteGasStationBranch) {
      throw new HttpException('Gas station branch not found!', HttpStatus.NOT_FOUND);
    }
    return {message: "Gas station branch has deleted!"};
  }
}