import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Grid, Paper, Typography } from '@material-ui/core/';
import Cookies from 'universal-cookie';

import { getUser } from '../../actions/user';

import { useStyles } from './styles';

const cookies = new Cookies();

const AdminPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { user_email } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <Paper className={classes.root}>
      <Typography variant="h3" align="center" style={{ marginBottom: '30px' }}>Account Details</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.info}>
          <Typography variant="subtitle1" component="div">Email:</Typography>
          <Typography variant="body1" component="div">{user_email}</Typography>
        </Grid>
        <Grid item xs={12} className={classes.actions}>
          <Button component={Link} to="/password" variant="outlined">Change your password</Button>
          {<Button component={Link} to="/add-account" variant="outlined">Add account to site</Button>
            && (cookies.get('token') === 'owner' || cookies.get('token') === 'admin')}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AdminPage;
