import express from 'express';
import { getBlogs, getBlogsByAdmin, addBlog, deleteBlog, updateBlogById, getBlogById, getBySlug } from '../controllers/blog.controller.js'
import { addUser, loginUser, logoutUser, getUser, updateUserPassword, addNewUserByAdmin, getUsers } from '../controllers/user.controller.js'
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/blogs', getBlogs)
router.get('/blogs/admin', auth, getBlogsByAdmin)
router.post('/blogs', auth, addBlog)
router.delete('/blogs/:blogId', deleteBlog)
router.patch('/blogs/:blogId', auth, updateBlogById)
router.get('/blogs/:blogId', getBlogById)
router.get('/blog/:slug', getBySlug)

router.post('/user/signup', addUser)
router.post('/user/login', loginUser)
router.post('/user/logout', auth, logoutUser);
router.get('/user', auth, getUser)
router.patch('/user/me', auth, updateUserPassword)
router.post('/user/add-account', auth, addNewUserByAdmin)
router.get('/user/all', auth, getUsers)



export default router;