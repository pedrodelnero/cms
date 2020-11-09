import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import Button from '@material-ui/core/Button';

import './styles.css';

const cookies = new Cookies();

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = cookies.get('token');
    try {
      const { data } = await axios.patch('http://localhost:5000/user/me', { currentPassword, newPassword, confirmNewPassword }, {
        headers: { Authorization: `Bearer ${token}` },
      });

      window.location.href = '/account';
    } catch (error) {
      console.log(error.response.data.message);
      // console.log(error.response.data.message);
    }
  };

  return (
    <>
      <div className="change-password">
        <h3>Change password</h3>
        <form className="change-password-form" onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Current password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="New password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm new password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
          <Button variant="contained" color="primary" type="submit">Change password</Button>
        </form>
      </div>
    </>
  );
};

export default ChangePassword;
