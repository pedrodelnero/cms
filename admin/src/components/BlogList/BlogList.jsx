import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
// import draftToHtml from "draftjs-to-html";

// import "./AddBlog.css";
import { getBlogs } from "../../actions/blogs";

const BlogList = () => {
    const blogs = useSelector((state) => state.blogs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBlogs());
      }, [dispatch]);


    const deleteBlog = (blogId) => {
        axios.delete(`http://localhost:5000/blog/${blogId}`)
        window.location.reload(); 
    }

    return (
        <div className="blog-list">
            {blogs.map((blog) => (
                <Link to={`/blog-form/${blog.blog_id}`} key={blog.blog_id}>
                    <p>{blog.blog_id}</p>
                    <h2>{blog.blog_title}</h2>
                    <button onClick={() => deleteBlog(blog.blog_id)}>Delete</button>
                </Link>
            ))}
        </div>
    )
}

export default BlogList;