import { Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize";
import { ConfigModule } from "@nestjs/config";


import { AppService } from './app.service';
import { GasStationModule } from './gas_station/gas_station.module';
import { GasStation } from './gas_station/models/gas_station.model';
import { FuelTypesModule } from './fuel_types/fuel_types.module';
import { GasStationFuelTypeModule } from './gas_station_fuel_type/gas_station_fuel_type.module';
import { GasStationBranch } from './gas_station_branch/models/gas_station_branch.model';
import { FuelType } from './fuel_types/models/fuel_type.model';
import { GasStationFuelType } from './gas_station_fuel_type/model/gas_station_fuel_type.model';
import { GasStationBranchModule } from './gas_station_branch/gas_station_branch.module';

@Module({
  imports: [
    ConfigModule.forRoot({envFilePath: '.env', isGlobal: true}),
    SequelizeModule.forRoot({
      dialect:"postgres",
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      models: [GasStation, GasStationBranch, FuelType, GasStationFuelType],
      autoLoadModels: true,
      logging: true
    }),
    GasStationModule,
    GasStationBranchModule,
    FuelTypesModule,
    GasStationFuelTypeModule
  ],
  providers: [AppService],
  controllers: [],
  exports: [],
})
export class AppModule {}
