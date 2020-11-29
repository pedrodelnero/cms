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
    <Paper elevation={3} className={classes.root}>
      <Typography component={Link} to={`/page-form/${page_id}`} variant="h6" className={classes.title} color="primary">{page_title}</Typography>
      <Button type="button" variant="outlined" color="secondary" className={classes.button} onClick={() => deletePageItem(page_id)}>Delete</Button>
    </Paper>
  );
};

export default PageListItem;
