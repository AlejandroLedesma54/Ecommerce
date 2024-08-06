import { Model, Column, Table, DataType } from 'sequelize-typescript';

@Table({
    tableName: "entity",
    timestamps: true,
})
export class Entity extends Model<Entity> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true
  })
  id!: number;

  @Column({
    type: DataType.STRING(200),
    allowNull: false,
    unique: true
  })
  name!: string;
}
