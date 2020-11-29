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
    <>
      <Paper elevation={3} className={classes.root}>
        <Typography component={Link} to={`/blog-form/${blog_id}`} variant="h6" color="primary" className={classes.title}>{blog_title}</Typography>
        <Button type="button" variant="outlined" color="secondary" className={classes.button} onClick={() => deleteBlogItem(blog_id)}>Delete</Button>
      </Paper>
    </>
  );
};

export default BlogListItem;
