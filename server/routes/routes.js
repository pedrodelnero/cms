import express from 'express';
import { getBlogs, getBlogsByAdmin, addBlog, deleteBlog, updateBlogById, getBlogById, getBySlug } from '../controllers/blog.controller.js'
import { addUser, loginUser, logoutUser, getUser, updateUserPassword, addNewUserByAdmin, getUsers, deleteUsers } from '../controllers/user.controller.js'
import { addPage, getPages, getPageById, deletePage, updatePageById } from '../controllers/page.controller.js'
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/blogs', getBlogs)
router.get('/blogs/admin', auth, getBlogsByAdmin)
router.post('/blogs', auth, addBlog)
router.delete('/blogs/:blogId', deleteBlog)
router.patch('/blogs/:blogId', auth, updateBlogById)
router.get('/blogs/:blogId', getBlogById)
router.get('/blog/:slug', getBySlug)

router.get('/pages', getPages)
router.post('/pages', auth, addPage)
router.get('/pages/:pageId', getPageById)
router.delete('/pages/:pageId', deletePage)
router.patch('/pages/:pageId', auth, updatePageById)

router.post('/user/signup', addUser)
router.post('/user/login', loginUser)
router.post('/user/logout', auth, logoutUser);
router.get('/user', auth, getUser)
router.patch('/user/me', auth, updateUserPassword)
router.post('/user/add-account', auth, addNewUserByAdmin)
router.get('/user/all', auth, getUsers)
router.delete('/user/:id', auth, deleteUsers)



export default router;