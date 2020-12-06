import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Paper, TextField, Typography } from '@material-ui/core/';
import Alert from '@material-ui/lab/Alert';

import useStyles from './styles';
import { changePassword } from '../../../actions/user';

const ChangePassword = () => {
  const classes = useStyles();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const errorMessage = useSelector((state) => state.error);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(changePassword(currentPassword, newPassword, confirmNewPassword));
  };

  return (
    <Paper className={classes.root}>
      <Typography color="inherit" variant="h2" component="div">Change password</Typography>
      {!!errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          type="password"
          placeholder="Current password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          variant="outlined"
        />
        <TextField
          type="password"
          placeholder="New password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          variant="outlined"
        />
        <TextField
          type="password"
          placeholder="Confirm new password"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
          variant="outlined"
        />
        <Button variant="contained" color="primary" type="submit">Change password</Button>
      </form>
    </Paper>
  );
};

export default ChangePassword;
