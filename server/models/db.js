import mysql from "mysql";
import dbConfig from "../config/db.config.js";


const db = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});


// const connection = mysql.createConnection({
//   host: dbConfig.HOST,
//   user: dbConfig.user,
//   password: dbConfig.PASSWORD,
//   database: dbConfig.DB,
// });


// connection.connect(error => {
//   if (error) console.log('DB', error)
//   console.log("Successfully connected to the database.");
// });

export default db;