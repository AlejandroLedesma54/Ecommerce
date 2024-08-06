import { Model, Column, Table, ForeignKey, DataType, BelongsTo } from 'sequelize-typescript';
import { User } from './user';

@Table({
    tableName: "cart",
    timestamps: true,
})
export class Cart extends Model<Cart> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true
  })
  id!: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  userId!: number;

  @BelongsTo(() => User)
  user!: User;
}
