import Site from '../models/site.model.js';
// import Roles from '../models/roles.model.js';
// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcryptjs';

export const addSite = async (req, res) => {    
  const { site: siteName, email } = req.body;  
  
  try {    
    // let user = await Site.findOne({ where: { site_name: name && site_email: email }})
    let site = await Site.findOne({ $and: [{site_name: siteName}, {site_email: email}] })

    if (site) return res.status(400).send({ message: "Site Already Exists" }); 

    site = await Site.create({
      site_name: siteName,
      site_email: email,
    });

    res.status(201).send(site);  
  } catch (error) {
    console.log(error)
  }
};

export const getSite = async (req, res) => {    
  const { siteName } = req.params;  
  
  try {    
    let site = await Site.findOne({ where: { site_name: siteName }})
    
    !site ? res.status(404).json({ error: 'No page with ID provided' }) : res.status(200).send(site)
  } catch (error) {
    console.log(error)
  }
};

export const getSiteById = async (req, res) => {    
  const { siteId } = req.params;  
  
  try {    
    let site = await Site.findOne({ where: { site_id: siteId }})
    
    !site ? res.status(404).json({ error: 'No page with ID provided' }) : res.status(200).send(site)
  } catch (error) {
    console.log(error)
  }
};

export const updateSiteInfo = async (req,res) => {
  const { siteName, siteAddress, siteCountry, siteEmail } = req.body;
  const { site_name } = req.user;


  try {
    const site = await Site.findOne({ where: { site_name }});
    
    if (site.site_name !== siteName) site.site_name = siteName;
    if (site.site_address !== siteAddress) site.site_address = siteAddress;
    if (site.site_country !== siteCountry) site.site_country = siteCountry;
    if (site.site_email !== siteEmail) site.site_email = siteEmail;
    
    await site.save()
    
    res.send(site)
  } catch (error) {
      res.status(500).json({ error: error.message })
  }
}