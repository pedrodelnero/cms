import mysql from "mysql";


const db = mysql.createPool({
  host: 'localhost',
  user: "root",
  password: process.env.DB_PASSWORD,
  database: 'cmsdb'
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