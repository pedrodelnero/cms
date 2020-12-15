import express from 'express';
import { getBlogs, getBlogsByAdmin, addBlog, deleteBlog, updateBlogById, getBlogById, getBySlug } from '../controllers/blog.controller.js'
import { addUser, loginUser, logoutUser, getUser, updateUserProfileDetails, addNewUserByAdmin, getUsers, deleteUsers } from '../controllers/user.controller.js'
import { addPage, getPages, getPageById, deletePage, updatePageById } from '../controllers/page.controller.js'
import { addSite, getSite, updateSiteInfo, getSiteById } from '../controllers/site.controller.js'
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/blogs', getBlogs)
router.get('/blogs/admin', auth, getBlogsByAdmin)
router.post('/blogs', auth, addBlog)
router.delete('/blogs/:blogId', auth, deleteBlog)
router.patch('/blogs/:blogId', auth, updateBlogById)
router.get('/blogs/:blogId', auth, getBlogById)
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
router.patch('/user/me', auth, updateUserProfileDetails)
router.post('/user/add-account', auth, addNewUserByAdmin)
router.get('/user/all', auth, getUsers)
router.delete('/user/:id', auth, deleteUsers)

router.get('/site/:siteId', getSite)
router.get('/sites/:siteId', auth, getSiteById)
router.post('/site/add', auth, addSite)
router.patch('/site/update', auth, updateSiteInfo)


export default router;