import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getBlogs } from '../../actions/blogs';
import BlogListItem from './BlogListItem/BlogListItem';

const BlogList = () => {
  const blogs = useSelector((state) => state.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <BlogListItem key={blog.blog_id} blog={blog} />

      ))}
    </div>
  );
};

export default BlogList;
