import { Model, Column, Table, ForeignKey, BelongsTo, DataType } from 'sequelize-typescript';
import { Role } from './role';
import bcrypt from 'bcryptjs';

@Table({
    tableName: "user",
    timestamps: true,
})
export class User extends Model <User>{
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
  email!: string;

  @Column({
    type: DataType.STRING(200),
    allowNull: false
  })
  password!: string;

  @ForeignKey(() => Role)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  roleId!: number;

  @BelongsTo(() => Role)
  role!: Role;

  validatePassword(password: string): boolean {
    return bcrypt.compareSync(password, this.password);
  }
}
