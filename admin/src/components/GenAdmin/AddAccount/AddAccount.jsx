import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { Button, FormControl, MenuItem, Select, InputLabel } from '@material-ui/core/';

import './styles.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = React.useState('');
  const handleChange = (event) => setRole(event.target.value);
  const cookies = new Cookies();

  // Need error handling for emails already in use
  //   How to find display error message from API in reactjs
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/user/add-account', { email, password, role }, {
        headers: { Authorization: `Bearer ${cookies.get('token')}` } });

      window.location.href = '/';
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Add Account</h1>
      <div className="add-account">
        <form className="add-account-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Temporary password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControl>
            <InputLabel id="demo-customized-select-label">Role</InputLabel>
            <Select
              className="add-account-role"
              value={role}
              onChange={handleChange}
            >
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="writer">Writer</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" color="primary" type="submit">Add User</Button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
