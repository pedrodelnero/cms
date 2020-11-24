import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Paper, Button, Typography } from '@material-ui/core';

import useStyles from './styles.js';
import { deletePage } from '../../../actions/pages';

const PageListItem = ({ page: { page_id, page_title } }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const deletePageItem = (pageId) => {
    dispatch(deletePage(pageId));
    window.location.reload();
  };

  return (
    <Paper className="blog-list-item" elevation={3} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px', marginBottom: '10px' }}>
      <Typography component={Link} to={`/page-form/${page_id}`} variant="h6" style={{ textDecoration: 'none', paddingRight: '50px' }} color="primary">{page_title}</Typography>
      <Button type="button" variant="outlined" color="secondary" style={{ maxHeight: '40px', minWidth: '85px' }} onClick={() => deletePageItem(page_id)}>Delete</Button>
    </Paper>
  );
};

export default PageListItem;
