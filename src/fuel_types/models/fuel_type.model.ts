import { BelongsTo, BelongsToMany, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { GasStationFuelType } from "src/gas_station_fuel_type/model/gas_station_fuel_type.model";
import { GasStationBranch } from "src/gas_station_branch/models/gas_station_branch.model";

interface FuelTypeCreationAttrs {
  name: string;
}

@Table({ tableName: 'fuel_types' })
export class FuelType extends Model<FuelType, FuelTypeCreationAttrs> {
  @ApiProperty({ example: 1, description: 'Unique Id'})
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true
  })
  id: number;

  @ApiProperty({ example: 'sometype', description: 'Fuel type name'})
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @BelongsToMany(() => GasStationBranch, () => GasStationFuelType)
  gas_station: GasStationBranch[];
}