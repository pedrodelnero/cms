import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql';
import cors from "cors";

// import routes from './routes/blog.js';

const app = express();
app.use(cors())
app.use(bodyParser.json());

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'cmsdb'

})

// app.use('/', routes)

// BLOG TABLE

app.get('/get-blogs', (req, res) => {
  const sqlSelect = 'SELECT * FROM blog';
  db.query(sqlSelect, (err, result) => {
    
    (err) ? console.log(err) : res.send(result)
  })
})

app.post('/post-blog', (req, res) => {
  const { blogTitle, blogBody } = req.body;
  
  const sqlInsert = 'INSERT INTO blog (blog_title, blog_body) VALUES (?,?)';
  db.query(sqlInsert, [blogTitle, blogBody], (err, result) => {

      (err) ? console.log(err) : console.log(result)
    })
  })
  
  app.delete('/delete-blog/:id', (req, res) => {
    const { id } = req.params;
    
    const sqlDelete = 'DELETE FROM blog WHERE blog_id = ?';
    db.query(sqlDelete, id, (err, result) => {
      
      (err) ? console.log(err) : console.log(result)
  })
})




app.listen(5000, () => console.log('listening in port 5000'))