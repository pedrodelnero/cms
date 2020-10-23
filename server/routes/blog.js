
import express from 'express';

const router = express.Router();

router.get('/get-blogs', (req, res) => {
    const sqlSelect = 'SELECT * FROM blog';
    db.query(sqlSelect, (err, result) => {
      
      res.send(result)
    })
  })
  
router.post('/post-blog', (req, res) => {
    const { blogTitle, blogBody } = req.body;

    const sqlInsert = 'INSERT INTO text (blog_title, blog_bldy) VALUES (?,?)';
    db.query(sqlInsert, [blogTitle, blogBody], (err, result) => {

        if (err) console.log(err)
    })
})

router.delete('/delete-blog/:id', (req, res) => {
    const { id } = req.params;

    const sqlDelete = 'DELETE FROM blog WHERE blog_id = ?';
    db.query(sqlDelete, id, (err, result) => {
        
        if (err) console.log(err)
    })
})



export default router;