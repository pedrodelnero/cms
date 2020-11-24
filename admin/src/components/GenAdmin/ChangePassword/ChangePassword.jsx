import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { Button, Paper, TextField, Typography } from '@material-ui/core/';

import useStyles from './styles';

const cookies = new Cookies();

const ChangePassword = () => {
  const classes = useStyles();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = cookies.get('token');
    try {
      await axios.patch('http://localhost:5000/user/me', { currentPassword, newPassword, confirmNewPassword }, {
        headers: { Authorization: `Bearer ${token}` },
      });

      window.location.href = '/account';
    } catch (error) {
      console.log(error.response.data.message);
      // console.log(error.response.data.message);
    }
  };

  return (
    <Paper className={classes.root}>
      <Typography color="inherit" variant="h2" component="div">Change password</Typography>

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
