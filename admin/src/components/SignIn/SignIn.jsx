import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';

import './styles.css';
import { userLogIn } from '../../actions/user';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  // Need error handling for emails already in use
  //   How to find display error message from API in reactjs
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(userLogIn(email, password));
  };

  return (
    <>
      <h1>Sign in into your store</h1>
      <div className="sign-in">
        <form className="sign-in-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" color="primary" type="submit">Sign In</Button>
          <a href="/sign-up">Don't have an account? Create account</a>
        </form>
      </div>
    </>
  );
};

export default SignUp;
