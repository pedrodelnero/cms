import Sequelize from 'sequelize';
import Site from '../models/site.model.js';
import User from '../models/user.model.js';

const op = Sequelize.Op;

export const addSite = async (site_name, site_email)  => {      
  try {    
    let site = await Site.findOne({ where: { [op.and]: [{ site_name }, { site_email }] }})
    
    if (site) {
      throw new Error('Site Already Exists')
    } else {
      site = await Site.create({ site_name, site_email });
      return(site);  
    }
  } catch (error) {
    return(error.message)
  }
};
// export const addSite = async (req, res) => {    
//   const { site: siteName, email } = req.body;  
  
//   try {    
//     let site = await Site.findOne({ where: { [op.and]: [{site_name: siteName}, {site_email: email}] }})
    
//     if (site) {
//       throw new Error('Site Already Exists')
//     } else {
//       site = await Site.create({ site_name: siteName, site_email: email });
      
//       res.status(201).send(site);  
//     }
//   } catch (error) {
//     res.status(400).send(error.message)
//   }
// };

export const getSite = async (req, res) => {    
  const { siteId } = req.params;  
  
  try {    
    let site = await Site.findOne({ where: { site_id: siteId }})
    
    if (!site) {
      throw new Error('No page with ID provided')
     } else {
      res.status(200).send(site)
     } 
    
  } catch (error) {
    res.status(400).send(error.message)
  }
};
// export const getSite = async (req, res) => {    
//   const { siteId } = req.params;  
  
//   try {    
//     let site = await Site.findOne({ where: { site_id: siteId }})
    
//     if (!site) {
//       throw new Error('No page with ID provided')
//      } else {
//       res.status(200).send(site)
//      } 
    
//   } catch (error) {
//     res.status(400).send(error.message)
//   }
// };

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
    
    if (site.site_name !== siteName) {
      site.site_name = siteName;
      const user = await useer.findAll({ where: { site_name }});
      console.log(users)
    };
    if (site.site_address !== siteAddress) site.site_address = siteAddress;
    if (site.site_country !== siteCountry) site.site_country = siteCountry;
    if (site.site_email !== siteEmail) site.site_email = siteEmail;
    
    // await site.save()
    
    // res.send(site)
  } catch (error) {
    res.status(500).send(error.message)
  }
}