import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Paper, Button, Typography } from '@material-ui/core';

import useStyles from './styles.js';
import { deleteBlog } from '../../../actions/blogs';

const BlogListItem = ({ blog: { blog_id, blog_title } }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const deleteBlogItem = (blogId) => {
    dispatch(deleteBlog(blogId));
    window.location.reload();
  };

  return (
    <Paper className="blog-list-item" elevation={3} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px', marginBottom: '10px' }}>
      <Typography component={Link} to={`/blog-form/${blog_id}`} variant="h6" style={{ textDecoration: 'none', paddingRight: '50px' }} color="primary">{blog_title}</Typography>
      <Button type="button" variant="outlined" color="secondary" style={{ maxHeight: '40px', minWidth: '85px' }} onClick={() => deleteBlogItem(blog_id)}>Delete</Button>
    </Paper>
  );
};

export default BlogListItem;
