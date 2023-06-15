import { Sequelize } from "sequelize";
import db from '../config/database.js';

const { DataTypes } = Sequelize;

const Medicines = db.define('medicines', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nama_obat: {
    type: DataTypes.STRING,
  },
  jenis_obat: {
    type: DataTypes.STRING,
  },
  produsen: {
    type: DataTypes.STRING,
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

export default Medicines;