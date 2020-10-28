import express from 'express';
import { getBlogs, addBlog, deleteBlog , getBlogById, getBySlug } from '../controllers/blog.controller.js'

const router = express.Router();

router.get('/blogs', getBlogs)
router.post('/blogs', addBlog)
router.delete('/blogs/:blogId', deleteBlog)
router.get('/blogs/:blogId', getBlogById)
router.get('/blog/:slug', getBySlug)

/*

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
*/


export default router;