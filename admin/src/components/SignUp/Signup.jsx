import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';

import './styles.css';
import { userSignUp } from '../../actions/user';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [site, setSite] = useState('');
  const dispatch = useDispatch();

  // Need error handling for emails already in use
  //   How to find display error message from API in reactjs
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(userSignUp(site, name, email, password));
  };

  return (
    <>
      <h1>Sign up to create your store</h1>
      <div className="sign-up">
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Site Name (can be changed later)"
            value={site}
            onChange={(e) => setSite(e.target.value)}
          />
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <Button variant="contained" color="primary" type="submit">Sign Up</Button>
          <a href="/sign-in">Already have an account? Sign in</a>
        </form>
      </div>
    </>
  );
};

export default SignUp;
