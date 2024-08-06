import { Model, Column, Table, ForeignKey, DataType } from 'sequelize-typescript';
import { Role } from './role';
import { Entity } from './entity';

@Table({
    tableName: "permission",
    timestamps: true,
  })
export class Permission extends Model<Permission>{
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true
  })
  id!: number;

  @ForeignKey(() => Role)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  roleId!: number;

  @ForeignKey(() => Entity)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  entityId!: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false
  })
  canCreate!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false
  })
  canUpdate!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false
  })
  canDelete!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false
  })
  canGet!: boolean;
}
