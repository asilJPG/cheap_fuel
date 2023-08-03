import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { GasStationBranch } from "src/gas_station_branch/models/gas_station_branch.model";
import { FuelType } from "src/fuel_types/models/fuel_type.model";

interface GasStationFuelTypeCreationAttrs {
  gas_station_branch_id: number;
  fuel_type_id: number;
  price: number;
  is_has: boolean;
}

@Table({ tableName: 'gas_station_fuel_type' })
export class GasStationFuelType extends Model<GasStationFuelType, GasStationFuelTypeCreationAttrs> {
  @ApiProperty({ example: 1, description: 'Unique Id'})
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true
  })
  id: number;

  @ApiProperty({ example: 1, description: 'Gas station branch Id'})
  @ForeignKey(() => GasStationBranch)
  @Column({type: DataType.INTEGER})
  gas_station_branchId: number;

  @ApiProperty({ example: 1, description: 'Fuel type Id'})
  @ForeignKey(() => FuelType)
  @Column({type: DataType.INTEGER})
  fuel_typeId: number;

  @ApiProperty({ example: 10000.00, description: 'Fuel price'})
  @Column({
    type: DataType.DECIMAL(10, 2),
  })
  price: number;

  @ApiProperty({ example: true, description: 'Fuel existance'})
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true
  })
  is_has: boolean;

  @BelongsTo(() => FuelType)
  fuel: FuelType;

  @BelongsTo(() => GasStationBranch)
  gas_station: GasStationBranch;
}
