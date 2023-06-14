import { Sequelize } from "sequelize";
import db from '../config/database.js';

const { DataTypes } = Sequelize;

const Sellers = db.define('sellers', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nama_produk: {
    type: DataTypes.STRING,
  },
  nama_pedagang: {
    type: DataTypes.STRING,
  },
  lokasi: {
    type: DataTypes.STRING,
  },
  kontak: {
    type: DataTypes.INTEGER,
  },
  jumlah_produk: {
    type: DataTypes.INTEGER,
  }
},{
  freezeTableName: true,
  timestamps: false
});

export default Sellers;