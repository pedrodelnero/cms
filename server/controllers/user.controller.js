import User from '../models/user.model.js';
import Roles from '../models/roles.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// console.log(Roles)

export const addUser = async (req, res) => {    
  const { site, name, email, password } = req.body;  
  
  try {    
    let user = await User.findOne({ where: { user_email: email }})

    if (user) return res.status(400).send({ message: "User Already Exists" }); 

    user = await User.create({
      site_name: site,
      user_email: email,
      user_name: name,
      user_password: bcrypt.hashSync(password, 8),
      user_role: Roles.OWNER
    });

    const token = jwt.sign({ user_name: user.user_name, user_role: user.user_role, site_name: user.site_name }, process.env.JWT_SECRET, { expiresIn: '24h' });
    res.status(201).send({ user, token });  
  } catch (error) {
    console.log(error)
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await User.findByCredentials(email, password);
    const token = jwt.sign({ user_name: user.user_name, user_role: user.user_role, site_name: user.site_name }, process.env.JWT_SECRET, { expiresIn: '24h' });
    
    res.send({ user, token });
  } catch (error) {
    res.status(500).send({message: error.message});
  }
};

export const logoutUser = async (req, res) => {
  try {  
    res.json({ message: 'Logged out' });
  } catch (error) {
    res.status(500).json({ message: error.message});
  }
};

export const getUser = async (req, res) => {
  const { user_name } = req.user;
  
  try {
    let user = await User.findOne({ where: { user_name }});

    res.send(user);
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

export const updateUserPassword = async (req, res) => {
  const { user_name }  = req.user;
  const { currentPassword, newPassword, confirmNewPassword }  = req.body;
  
  try {
    const user = await User.findOne({ where: { user_name }});
    
    if (req.body.name) {
      user.user_name = req.body.name;
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 8);
    
    const isMatch = await bcrypt.compare(currentPassword, user.user_password);
    if (!isMatch) throw new Error("You entered the wrong password.");
    
    const isConfirmedSame = await bcrypt.compare(confirmNewPassword, hashedNewPassword);
    if (!isConfirmedSame) throw new Error("The passwords do not match.");
    
    const isOld = await bcrypt.compare(newPassword, user.user_password);
    // WATCH THERE IS NOT ! HERE
    if (isOld) throw new Error("Must be a new password.");

    user.user_password = hashedNewPassword;
    
    await user.save()

    res.send(user)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
};

export const addNewUserByAdmin = async (req, res) => {
  const { email, password, role } = req.body;
  const { site_name } = req.user;
  
  try {
    let user = await User.findOne({ where: { user_email: email }});
    if (user) return res.status(400).send({ message: "User Already Exists" }); 

    user = await User.create({
      site_name: site_name,
      user_email: email,
      user_password: bcrypt.hashSync(password, 8),
      user_role: role
    });
    
    res.send({ user });
  } catch (error) {
    res.status(500).send({message: error.message});
  }
};

export const getUsers = async (req, res) => {
  const { user_role, site_name } = req.user;

  // console.log(1, user_role, ' | ', site_name)
  
  try {
    if (user_role === Roles.OWNER || user_role === Roles.ADMIN) {
      const users = await User.findAll({ where: { site_name }})

      res.send(users)
    } else {
      res.send({message: 'Not available to access'})
    }
  } catch (error) {
    res.status(500).send({message: error.message});
  }
};