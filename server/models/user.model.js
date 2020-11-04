import Sequelize from "sequelize";
import jwt from 'jsonwebtoken';
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
    allowNull: false,
  },
  user_password: {
    type: DataTypes.STRING(100),
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
    console.log(error)
  }
}

// User.beforeCreate(async (user, options) => {
//   const hashedPassword = await hashPassword(user.password);
//   user.password = hashedPassword;
// });

// // Method - You can call created methods on instances of a schema 
// User.generateAuthToken = async function () {
//   const user = this;
//   const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET);

//   user.tokens = user.tokens.concat({ token });

//   return token;
// }

// userSchema.methods.updatePassword = async function () {
//   const user = this;
//   const { currentPassword, newPassword, confirmNewPassword }  = req.body;

//   console.log(currentPassoword, 1);
  
//   const hashedNewPassword = await bcrypt.hash(newPassword, 8);

//   const isMatch = await bcrypt.compare(currentPassword, user.password);
//   if (!isMatch) throw new Error("You entered the wrong password.");
  
//   const isConfirmedSame = await bcrypt.compare(confirmNewPassword, hashedNewPassword);
//   if (!isConfirmedSame) throw new Error("The passwords do not match.");

//   const isOld = (await bcrypt.compare(newPassword, user.password));
//   if (!isOld) throw new Error("Must be a new password.");

//   return hashedNewPassword;
// }


// userSchema.pre('save', async function (next) {
//   const user = this;

//   if (user.isModified('password')) {
//     user.password = await bcrypt.hash(user.password, 8);
//   }

//   next();
// });



export default User;