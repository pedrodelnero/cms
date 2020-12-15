import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Paper, TextField, Typography } from '@material-ui/core/';
import Alert from '@material-ui/lab/Alert';

import useStyles from './styles.js';
import { confirmNewAccount } from '../../../actions/user';

const ConfirmNewAccount = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const errorMessage = useSelector((state) => state.error);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(confirmNewAccount(name, currentPassword, newPassword, confirmNewPassword));
  };

  return (
    <Paper className={classes.root}>
      <Typography className={classes.title} color="inherit" variant="h4">Confirm new account</Typography>
      {!!errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      <form className={classes.form} onSubmit={handleSubmit}>
        <Typography color="inherit" variant="h5">Name</Typography>
        <TextField
          type="text"
          variant="outlined"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Typography color="inherit" variant="h5">Password</Typography>
        <TextField
          type="password"
          variant="outlined"
          placeholder="Current password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <TextField
          type="password"
          variant="outlined"
          placeholder="New password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <TextField
          type="password"
          variant="outlined"
          placeholder="Confirm new password"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" type="submit">Done</Button>
      </form>
    </Paper>
  );
};

export default ConfirmNewAccount;
