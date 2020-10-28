import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql';
import cors from "cors";

import routes from './routes/blog.routes.js';

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// export const db = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: process.env.DB_PASSWORD,
//     database: 'cmsdb'

// })

app.use('/', routes)


app.listen(5000, () => console.log('listening in port 5000'))