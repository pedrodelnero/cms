import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Paper, TextField, Typography } from '@material-ui/core/';
import Alert from '@material-ui/lab/Alert';

import useStyles from './styles.js';
import { userLogIn } from '../../actions/user';

const SignUp = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const errorMessage = useSelector((state) => state.error);
  // USING useSelector for Error handling ==> how to set up the error messages in the front-end (in the input fields)
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(userLogIn(email, password));
  };

  return (
    <Paper className={classes.root}>
      <Typography className={classes.title} color="inherit" variant="h2" component="div">Sign into your store</Typography>
      {!!errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          error={!!errorMessage}
          id="outlined-error-helper-text"
          variant="outlined"
          inputProps={{ min: 0, style: { textAlign: 'center' } }}
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          error={!!errorMessage}
          id="outlined-error-helper-text"
          variant="outlined"
          inputProps={{ min: 0, style: { textAlign: 'center' } }}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" type="submit">Sign In</Button>
      </form>
      <Typography component={Link} to="sign-up" variant="h6" align="center" style={{ marginTop: '20px', textDecoration: 'none' }}>Don't have an account? Create account</Typography>
    </Paper>
  );
};

export default SignUp;
