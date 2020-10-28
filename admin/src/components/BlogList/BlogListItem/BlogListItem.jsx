import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";

import "./styles.css";
import { deleteBlog } from "../../../actions/blogs";

const BlogListItem = ({ blog: { blog_id, blog_title } }) => {
    const dispatch = useDispatch();

    const deleteBlogItem = (blogId) => {
        dispatch(deleteBlog(blogId));
        window.location.reload(); 
    }
 
    return (
        <div className="blog-list-item">
                <div><p>{blog_id}</p></div>
            <Link to={`/blog-form/${blog_id}`} key={blog_id}>
                <div className="blog-list-item-title"><h3>{blog_title}</h3></div>  
            </Link>
            <div><h3><button onClick={() => deleteBlogItem(blog_id)}>Delete</button></h3></div>
            
        </div>
    )
}

export default BlogListItem;