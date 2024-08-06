import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
import { Cart, Order, Permission, Product, ProductCart, Role, User } from '../models';


dotenv.config();

export const SECRET_KEY = process.env.SECRET_KEY || 'default_secret_key';

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  models: [Cart, Order, Permission, Product, ProductCart, Role, User],
  logging: false,
});

export default sequelize;
