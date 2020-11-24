import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button, Paper, TextField, Typography } from '@material-ui/core/';

import useStyles from './styles';
import { userSignUp } from '../../actions/user';

const SignUp = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [site, setSite] = useState('');
  const dispatch = useDispatch();

  // Need error handling for emails already in use
  //   How to find display error message from API in reactjs
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(userSignUp(site, name, email, password));
  };

  return (
    <Paper className={classes.root}>
      <Typography color="inherit" variant="h2" component="div">Sign up to create your store</Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          type="text"
          placeholder="Site Name (can be changed later)"
          value={site}
          onChange={(e) => setSite(e.target.value)}
          variant="outlined"
        />
        <TextField
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          variant="outlined"
        />
        <TextField
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
        />
        <TextField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
        />
        <Button variant="contained" color="primary" type="submit">Sign Up</Button>
      </form>
      <Typography component={Link} to="sign-in" variant="h6" align="center" style={{ marginTop: '20px', textDecoration: 'none' }}>Already have an account? Sign in</Typography>
    </Paper>
  );
};

export default SignUp;
