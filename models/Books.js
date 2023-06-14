import { Sequelize } from "sequelize";
import db from '../config/database.js';

const { DataTypes } = Sequelize;

const Books = db.define('books', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  judul: {
    type: DataTypes.STRING,
  },
  penulis: {
    type: DataTypes.STRING,
  },
  penerbit: {
    type: DataTypes.STRING,
  },
  tahun_terbit: {
    type: DataTypes.INTEGER,
  },
  harga: {
    type: DataTypes.INTEGER,
  },
  stok: {
    type: DataTypes.INTEGER,
  }
},{
  freezeTableName: true,
  timestamps: false
});

export default Books;