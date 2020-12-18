import Sequelize from "sequelize";

import db from "../config/db.config.js";

const { DataTypes } = Sequelize;


const Blog = db.define("blog", {
  blog_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  },
  blog_title: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  blog_body: {
    type: DataTypes.STRING(1000),
    allowNull: false,
  },
  blog_slug: {
    type: DataTypes.STRING(45),
    allowNull: false,
    unique: true
  },
  site_id: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  is_published: {
    type: DataTypes.BOOLEAN,

  },
  // site_name: {
  //   type: DataTypes.STRING(45),
  //   allowNull: false,
  // },
  blog_author: {
    type: DataTypes.STRING(45),
    allowNull: false,
  }
});



export default Blog;