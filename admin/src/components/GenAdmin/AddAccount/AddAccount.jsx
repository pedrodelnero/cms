import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@material-ui/core/';
import Alert from '@material-ui/lab/Alert';

import useStyles from './styles';
import { addAccountByAdmin } from '../../../actions/user';

const SignUp = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = React.useState('');
  const error = useSelector((state) => state.error);
  const [errorMessage, setErrorMessage] = React.useState(null);
  const dispatch = useDispatch();
  console.log(error);

  // if (error) setErrorMessage(error);

  useEffect(() => {
    if (error) {
      setErrorMessage(error);
    }
  }, [error]);

  // Issue with error handling => cannot add the window...href, it'll trigger regardless of error or not
  // Have to figure out way to make it trigger when fields are full and to not trigger when one of the fields ir empty

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);
    dispatch(addAccountByAdmin(email, password, role));
    // window.location.href = '/profile';
  };

  return (
    <Paper className={classes.root}>
      <Typography color="inherit" variant="h2" component="div">Add account</Typography>
      {!!errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          className={classes.field}
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
        />
        <TextField
          className={classes.field}
          type="password"
          placeholder="Temporary password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
        />
        <FormControl>
          <InputLabel className={classes.inputLabel}>Role</InputLabel>
          <Select
            value={role}
            onChange={(event) => setRole(event.target.value)}
            variant="outlined"
            className={classes.select}
          >
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="writer">Writer</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" color="primary" type="submit">Add User</Button>
      </form>
    </Paper>
  );
};

export default SignUp;
