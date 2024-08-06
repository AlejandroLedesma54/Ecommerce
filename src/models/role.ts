import { Model, Column, Table, DataType, HasMany } from 'sequelize-typescript';
import { User } from './user';

@Table({
    tableName: "role",
    timestamps: true,
})
export class Role extends Model <Role>{
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

  @HasMany(() => User)
  users!: User[];
}
