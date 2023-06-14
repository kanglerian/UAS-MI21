import dotenv from 'dotenv';
dotenv.config();

const { DB_NAME, DB_USERNAME, DB_PASSWORD, PORT_DB } = process.env;
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: '103.163.110.11',
  port: 3305,
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});

try {
  sequelize.authenticate();
  console.log('Database connected');
} catch (error) {
  console.log('Database not Connected.');
}

export default sequelize;