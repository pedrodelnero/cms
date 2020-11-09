import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';

import './styles.css';

const ConfirmNewAccount = () => {
  const [name, setName] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const cookies = new Cookies();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = cookies.get('token');
    try {
      await axios.patch('http://localhost:5000/user/me', { name, currentPassword, newPassword, confirmNewPassword }, {
        headers: { Authorization: `Bearer ${token}` },
      });

      window.location.href = '/profile';
    } catch (error) {
      console.log(error);
      // console.log(error.response.data.message);
    }
  };

  return (
    <>
      <div className="confirm-new-account">
        <h3>Confirm new account</h3>
        <form className="confirm-new-account-form" onSubmit={handleSubmit}>
          <h4>Name</h4>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h4>Password</h4>
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
          <button type="submit">Done</button>
        </form>
      </div>
    </>
  );
};

export default ConfirmNewAccount;
