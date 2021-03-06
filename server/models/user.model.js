import Sequelize from "sequelize";
import bcrypt from 'bcryptjs';


import db from "../config/db.config.js";

const { DataTypes } = Sequelize;


const User = db.define("user", {
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
  // site_name: {
  //   type: DataTypes.STRING,
  //   allowNull: false,
  // },
  site_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  user_role: {
    type: DataTypes.STRING(10),
    allowNull: false,
  }
});


// Is the "new Error" in the catch correct?
User.findByCredentials = async (email, password) => {
  try {
    const user = await User.findOne({ where: { user_email: email }})
  
    if (!user) throw new Error("No account found with this email");
      
    const isMatch = await bcrypt.compareSync(password, user.user_password);
  
    if (!isMatch) throw new Error("Wrong password");
  
    return user;
    
  } catch (error) {
     throw new Error(error.message);
  }
};


export default User;