import Sequelize from 'sequelize';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import User from '../models/user.model.js';
import Roles from '../models/roles.model.js';
import Site from '../models/site.model.js';
import { addSite } from './site.controller.js'

const op = Sequelize.Op;

export const addUser = async (req, res) => {    
  const { site, name, email, password } = req.body;  
  
  try {    
    if (!site || !name || !email || !password) throw new Error("Missing field");

    let user = await User.findOne({ where: { user_email: email }})

    if (user) {
      throw new Error("User Already Exists");
    } else {
      const { dataValues: { site_id }} = await addSite(site, email)
      const { dataValues: { user_id, user_role, user_name }} = await User.create({
        user_email: email,
        user_name: name,
        user_password: bcrypt.hashSync(password, 8),
        site_name: site,
        site_id: site_id,
        user_role: Roles.OWNER
      });
      const token = jwt.sign({ user_id, user_role, site_id }, process.env.JWT_SECRET, { expiresIn: '24h' });
      res.status(201).send({ user_name, token, site_id, user_role });  
    }
  } catch (error) {
    res.status(400).send(error.message)
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await User.findByCredentials(email, password);
    if (!user) {
      throw new Error('No account found')
    } else {
      let { site_id } = await Site.findOne({ where: { site_id: user.site_id }})

      const token = jwt.sign({ user_id: user.user_id, user_role: user.user_role, site_id }, process.env.JWT_SECRET, { expiresIn: '24h' });
      // const token = jwt.sign({ user_name: user.user_name, user_role: user.user_role, site_name: user.site_name }, process.env.JWT_SECRET, { expiresIn: '24h' });

      res.send({ user, token, site_id });
    }
  } catch (error) {
    res.status(400).send(error.message)
  }
};

export const logoutUser = async (req, res) => {
  try {  
    res.status(200).send('Logged out');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getUser = async (req, res) => {
  const { user_id : id} = req.user;
  
  try {
    let { user_id, user_name, user_email, user_role, site_id } = await User.findOne({ where: { user_id : id}});
    // let user = await User.findOne({ where: { user_id }});
    
    res.send({ user_id, user_name, user_email, user_role , site_id});
  } catch (error) {
    res.status(500).send(error.message)
  }
};

export const updateUserProfileDetails = async (req, res) => {
  const { user_id, site_id }  = req.user;
  const { currentPassword, newPassword, confirmNewPassword }  = req.body;
  
  try {
    let user = await User.findOne({ where: { [op.and]: [{ user_id }, { site_id }] }})
    console.log('update', user.user_password)
    // const user = await User.findOne({ where: { site_id }});    
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
    res.status(500).send(error.message)
  }
};

export const addNewUserByAdmin = async (req, res) => {
  const { email, password, role } = req.body;
  const { site_id } = req.user;
  
  try {
    let user = await User.findOne({ where: { user_email: email }});
    if (user) throw new Error("User Already Exists"); 

    if (!email || !password || !role) {
      throw new Error('Missing field')
    } else {
        user = await User.create({
          site_id: site_id,
          // site_name: site_name,
          user_email: email,
          user_password: bcrypt.hashSync(password, 8),
          user_role: role
        });
          
        res.send('Profile Created');
    }
  } catch (error) {
    res.status(400).send( error.message);
  }
};

export const getUsers = async (req, res) => {
  const { user_role, site_id } = req.user;
  
  try {
    if (user_role === Roles.OWNER || user_role === Roles.ADMIN) {
      const users = await User.findAll({ where: { site_id }})

      res.send(users)
    } else {
      res.send({message: 'Not available to access'})
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteUsers = async (req, res) => {
  const { user_role } = req.user;
  const { id } = req.params;

  try {
    if (user_role === Roles.ADMIN || user_role === Roles.OWNER) {
        const user = await User.findOne({ where: { user_id: id }})
        await user.destroy();

        res.status(200).send('Deleted.');
    } else {
      throw new Error('No Access')
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};