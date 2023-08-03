import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { FuelType } from "src/fuel_types/models/fuel_type.model";
import { GasStationFuelType } from "src/gas_station_fuel_type/model/gas_station_fuel_type.model";
import { GasStation } from "src/gas_station/models/gas_station.model";

interface GasStationBranchCreationAttrs {
  gas_station_id: number;
  brach_name: string;
  address: string;
  location: string;
  phone_number: string;
}

@Table({ tableName: 'gas_station_branch' })
export class GasStationBranch extends Model<GasStationBranch, GasStationBranchCreationAttrs> {
  @ApiProperty({ example: 1, description: 'Unique Id'})
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true
  })
  id: number;

  @ApiProperty({ example: 1, description: 'Main gas station Id'})
  @ForeignKey(() => GasStation)
  @Column({
    type: DataType.INTEGER,
  })
  gas_station_id: number;
  @BelongsTo(() => GasStation)
  gas_station_info: GasStation

  @ApiProperty({ example: 'SomeGasStationBranch', description: 'Gas station branch name'})
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  brach_name: string;

  @ApiProperty({ example: 'somecity, 1-somehome', description: 'Gas station branch address'})
  @Column({
    type: DataType.STRING
  })
  address: string;

  @ApiProperty({ example: 'somelocation', description: 'Gas station branch location'})
  @Column({
    type: DataType.STRING
  })
  location: string;

  @ApiProperty({ example: '+998979309956', description: 'Gas station branch phone number'})
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  phone_number: string;

  @BelongsToMany(() => FuelType, () => GasStationFuelType)
  fuel_info: FuelType[];
}
