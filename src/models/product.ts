import { Model, Column, Table, DataType } from 'sequelize-typescript';

@Table({
    tableName: "Product",
    timestamps: true,
})
export class Product extends Model<Product>{
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true
  })
  id!: number;

  @Column({
    type: DataType.STRING(200),
    allowNull: false
  })
  name!: string;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false
  })
  price!: number;

  @Column({
    type: DataType.TEXT,
    allowNull: true
  })
  description!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  stock!: number;
}
