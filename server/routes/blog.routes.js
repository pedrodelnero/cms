import express from 'express';
import { getBlogs, getBlogsByAdmin, addBlog, deleteBlog, updateBlogById, getBlogById, getBySlug } from '../controllers/blog.controller.js'
import { addUser, loginUser, logoutUser } from '../controllers/user.controller.js'
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/blogs', getBlogs)
router.get('/blogs/admin', auth, getBlogsByAdmin)
router.post('/blogs', auth, addBlog)
router.delete('/blogs/:blogId', deleteBlog)
router.patch('/blogs/:blogId', auth, updateBlogById)
router.get('/blogs/:blogId', getBlogById)
router.get('/blog/:slug', getBySlug)

router.post('/users', addUser)
router.post('/users/login', loginUser)
router.post('/users/logout', auth, logoutUser);



export default router;