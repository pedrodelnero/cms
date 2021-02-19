import Sequelize from "sequelize";

const db = new Sequelize("cmsdb", "root", process.env.DB_PASSWORD, {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  logging: false,
  timezone: "+04:00",
});

db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

export default db;
