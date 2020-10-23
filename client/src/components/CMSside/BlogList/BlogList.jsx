import React, { useState, useEffect } from 'react'
import axios from 'axios';
// import draftToHtml from "draftjs-to-html";

// import "./AddBlog.css";

const BlogList = () => {
    const [blogList, setBlogList] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:5000/get-blogs')
            .then((res) => setBlogList(res.data))

    }, [])


    const deleteBlog = (id) => {
        axios.delete(`http://localhost:5000/delete-blog/${id}`)
        window.location.reload(); 
    }

    return (
        <div className="blog-list">
            {blogList.map((blog) => (
                <div key={blog.blog_id}>
                    <p>{blog.blog_id}</p>
                    <h2>{blog.blog_title}</h2>
                    <button onClick={() => deleteBlog(blog.blog_id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default BlogList;