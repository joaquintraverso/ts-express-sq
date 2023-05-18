import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

let host = process.env.DB_HOST;
let user = process.env.DB_USER;
let name = process.env.DB_NAME;
let password = process.env.DB_PASSWORD;

const sequelize = new Sequelize(name!, user!, password, {
  host: host,
  dialect: 'postgres',
});

export default sequelize;
