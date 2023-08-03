import { BelongsTo, BelongsToMany, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { GasStationBranch } from "src/gas_station_branch/models/gas_station_branch.model";

interface GasStationCreationAttrs {
  main_gas_station_name: string;
}

@Table({ tableName: 'gas_station' })
export class GasStation extends Model<GasStation, GasStationCreationAttrs> {
  @ApiProperty({ example: 1, description: 'Unique Id'})
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true
  })
  id: number;

  @ApiProperty({ example: 'SomeGasStation', description: 'Main gas station name'})
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  main_gas_station_name: string;

  @HasMany(() => GasStationBranch)
  branchs: GasStationBranch[];
}
