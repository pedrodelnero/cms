import Sequelize from "sequelize";
import bcrypt from 'bcryptjs';

import db from "../config/db.config.js";

const { DataTypes } = Sequelize;


const Site = db.define("site", {
  site_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  site_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  },
  site_email: {
    type: DataTypes.STRING,
    allowNull: false,
    isEmail: true,
    
  },
  site_address: {
    type: DataTypes.STRING(45),
  },
  site_country: {
    type: DataTypes.STRING(45),
  }
});



export default Site;