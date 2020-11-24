import Sequelize from "sequelize";

import db from "../config/db.config.js";

const { DataTypes } = Sequelize;


const Page = db.define("page", {
  page_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  },
  page_title: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  page_body: {
    type: DataTypes.STRING(1000),
    allowNull: false,
  },
  page_slug: {
    type: DataTypes.STRING(45),
    allowNull: false,
    unique: true
  },
  site_name: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  page_metadata_keywords: {
    type: DataTypes.STRING(1000)
  },
  page_metadata_description: {
    type: DataTypes.STRING(1000)
  },
  page_search_keywords: {
    type: DataTypes.STRING(1000)
  }
});



export default Page;