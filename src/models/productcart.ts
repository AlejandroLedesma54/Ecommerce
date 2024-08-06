import { Model, Column, Table, ForeignKey, DataType } from 'sequelize-typescript';
import { Cart } from './cart';
import { Product } from './product';

@Table({
    tableName: "productcart",
    timestamps: true,
})
export class ProductCart extends Model <ProductCart> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true
  })
  id!: number;

  @ForeignKey(() => Cart)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  cartId!: number;

  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  productId!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  quantity!: number;
}
