import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { GasStationService } from './gas_station.service';
import { GasStationController } from './gas_station.controller';
import { GasStation } from './models/gas_station.model';

@Module({
  imports: [SequelizeModule.forFeature([GasStation])],
  controllers: [GasStationController],
  providers: [GasStationService]
})
export class GasStationModule {}
