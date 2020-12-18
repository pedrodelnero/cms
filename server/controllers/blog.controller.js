import Blog from "../models/blog.model.js";

// ADMIN
// getBlogs is used in both ADMIN and SITE
export const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.findAll({attributes: ['blog_id', 'blog_title', 'blog_body', 'blog_slug', 'blog_author']});

        res.send(blogs)
    } catch (error) {
        res.status(500).send(error.message);
    }
};


export const getBlogsByAdmin = async (req, res) => {
    try {
        const blogs = await Blog.findAll({where: {site_id: req.user.site_id}, attributes: ['blog_id', 'blog_title', 'blog_body', 'blog_slug', 'blog_author']});
        // const blogs = await Blog.findAll({where: {site_name: req.user.site_name}, attributes: ['blog_id', 'blog_title', 'blog_body', 'blog_slug', 'blog_author']});

        res.send(blogs)
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const addBlog = async (req, res) => {    
    const { blogTitle, blogBody, blogAuthor, isPublished } = req.body; 
    try {     
        await Blog.create({
            blog_title: blogTitle,
            blog_body: blogBody,
            blog_slug: blogTitle.toLowerCase().trim().replace(/ /g, '-'),
            blog_author: blogAuthor,
            is_published: isPublished,
            site_id: req.user.site_id,
            // site_name: req.user.site_name

        });    
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const deleteBlog = async (req, res) => {
    const { blogId } = req.params;  
    try {
        await Blog.destroy({ where: { blog_id: blogId }})
        
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const updateBlogById = async (req,res) => {
    const { blogId } = req.params;
    const { blogTitle, blogBody } = req.body;
  
    try {
      const blog = await Blog.findOne({ where: { blog_id: blogId }});
      
      if (blog.blog_title !== blogTitle) blog.blog_title = blogTitle;
      if (blog.blog_body !== blogBody) blog.blog_body = blogBody;
      if (blog.blog_body !== blogBody) blog.blog_body = blogBody;
      
      await blog.save()
      
      res.send(blog)
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export const getBlogById = async (req, res) => {
    const { blogId } = req.params;
    try {
        const blog = await Blog.findOne({ where: { blog_id: blogId }});

        !blog ? res.status(404).json({ error: 'No blog with ID provided' }) : res.status(200).send(blog)

    } catch (error) {
        res.status(500).send(error.message);
    }
};


// SITE 
export const getBySlug = async (req, res) => {
    const { slug } = req.params;
    try {
        const blog = await Blog.findOne({where: { blog_slug: slug}});

        !blog ? res.status(404).json({ error: 'No blog with ID provided' }) : res.status(200).send(blog)

    } catch (error) {
        res.status(500).send(error.message);
    }
};
