import Sequelize from "sequelize";
import bcrypt from 'bcryptjs';


import db from "../config/db.config.js";

const { DataTypes } = Sequelize;


const User = db.define("user", {
  site_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  },
  user_email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    isEmail: true,
    
  },
  user_name: {
    type: DataTypes.STRING(45),
  },
  user_password: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  user_role: {
    type: DataTypes.STRING(10),
    allowNull: false,
  }
});



User.findByCredentials = async (email, password) => {
  try {
    const user = await User.findOne({ where: { user_email: email }})
  
    if (!user) throw new Error("No account found with this email");
      
    const isMatch = await bcrypt.compareSync(password, user.user_password);
  
    if (!isMatch) throw new Error("Wrong password");
  
    return user;
    
  } catch (error) {
    console.log(error);
  }
};


export default User;