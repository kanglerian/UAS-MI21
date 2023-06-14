import { Sequelize } from "sequelize";
import db from '../config/database.js';

const { DataTypes } = Sequelize;

const Schools = db.define('schools', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nama_sekolah: {
    type: DataTypes.STRING,
  },
  kepala_sekolah: {
    type: DataTypes.STRING,
  },
  akreditasi: {
    type: DataTypes.STRING,
  },
  tahun_berdiri: {
    type: DataTypes.INTEGER,
  },
  jumlah_siswa: {
    type: DataTypes.INTEGER,
  }
},{
  freezeTableName: true,
  timestamps: false
});

export default Schools;