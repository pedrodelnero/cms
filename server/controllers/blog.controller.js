import Blog from "../models/blog.model.js";


export const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.getAll();
        res.send(blogs)
    } catch (error) {
        console.log(error)
    }
};
// export const getBlogs = (req, res) => {
//     Blog.getAll((err, data) => {
//         if (err) {
//             console.log('CONTR 1', err);
//         }
//         else {
//             res.send(data)
//         } 
//     });
// };

//PROMISE
export const getBlogById = async (req, res) => {
    const { blogId } = req.params;

    try {
        const blog = await Blog.findById(blogId);

        !blog ? res.status(404).json({ error: 'No blog with ID provided' }) : res.status(200).send(blog)

    } catch (error) {
        console.log(error)
    }
};

// ORIGINAL
// export const getBlogById = (req, res) => {
//     const { blogId } = req.params;

//     Blog.findById(blogId, (err, data) => {
//         if (err) {
//           if (err.kind === "not_found") { res.status(404).send({ message: `No Blog found with id ${blogId}.` });
//           } else {
//             res.status(500).send({ message: `Error retrieving Blog with id: ${blogId}` });
//           }
//         } else res.send(data);
//     });
// };

export const addBlog = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
    }
    const { blogTitle, blogBody } = req.body;
    // console.log('Cont Create', blogTitle)

    // Create a Blog
    const blog = new Blog({ blogTitle, blogBody });

    // Save Blog in the database
    Blog.create(blog, (err, data) => {
        if (err)
            res.status(500).send({ message: err.message || "Some error occurred while creating the Customer." });
        else res.send(data);
    });
};

export const deleteBlog = (req, res) => {
    const { blogId } = req.params;
    
    Blog.delete(blogId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({ message: `Not Blog found with id: ${blogId}.` });
            } else {
                res.status(500).send({ message: `Could not delete Customer with id: ${blogId}` });
            }
        } else res.send({ message: `Blog was deleted successfully!` });
    });
};


/*

// Update a Customer identified by the customerId in the request
exports.update = (req, res) => {
  
*/