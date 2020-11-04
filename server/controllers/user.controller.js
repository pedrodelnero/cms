import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const addUser = async (req, res) => {    
    const {  site, name, email, password } = req.body;  
    
    try {    
        let user = await User.findOne({ where: { user_email: email }})
    
        if (user) return res.status(400).send({ message: "User Already Exists" }); 

        user = await User.create({
            site_name: site,
            user_email: email,
            user_name: name,
            user_password: bcrypt.hashSync(password, 8)
        });

        const token = jwt.sign({ user_name: user.user_name, site_name: user.site_name }, process.env.JWT_SECRET, { expiresIn: '24h' });
        res.status(201).send({ user, token });
        
    } catch (error) {
        console.log(error)
    }
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    
    try {
      const user = await User.findByCredentials(email, password);
      const token = jwt.sign({ user_name: user.user_name, site_name: user.site_name }, process.env.JWT_SECRET, { expiresIn: '24h' });
      
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