import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Paper, TextField, Typography } from '@material-ui/core/';
import Alert from '@material-ui/lab/Alert';

import useStyles from './styles';
import { userSignUp } from '../../actions/user';

const SignUp = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [site, setSite] = useState('');
  const errorMessage = useSelector((state) => state.error);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(userSignUp(site, name, email, password));
  };

  return (
    <Paper className={classes.root}>
      <Typography color="inherit" variant="h4" className={classes.title}>Sign up to create your store</Typography>
      {!!errorMessage && <Alert severity="error">{errorMessage}</Alert>}
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
