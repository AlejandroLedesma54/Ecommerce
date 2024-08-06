import { Model, Column, Table, ForeignKey, DataType, BelongsTo } from 'sequelize-typescript';
import { User } from './user';
import { ProductCart } from './productcart';

@Table({
  tableName: "order",
  timestamps: true,
})
export class Order extends Model<Order> {
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

  @ForeignKey(() => ProductCart)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  productCartId!: number;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false
  })
  total!: number;

  @BelongsTo(() => User)
  user!: User;

  @BelongsTo(() => ProductCart)
  productCart!: ProductCart;
}
