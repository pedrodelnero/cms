import React, { useState, useContext } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

import './styles.css';
import AuthApi from '../../context/Auth';

const SignUp = () => {
  const { setIsAuth } = useContext(AuthApi);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const cookies = new Cookies();

  // Need error handling for emails already in use
  //   How to find display error message from API in reactjs
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/users/login', { email, password });

      const options = { path: '/', expires: new Date(new Date().getTime() + (24 * 60 * 60 * 1000)) };

      cookies.set('token', data.token, options);
      cookies.set('user', data.user.user_name, options);
      cookies.set('site', data.user.site_name, options);
      setIsAuth(true);

      window.location.href = '/';
    } catch (error) {
      console.log(error);
    }
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
          <button type="submit">Sign In</button>
          <a href="/sign-up">Don't have an account? Create account</a>
        </form>
      </div>
    </>
  );
};

export default SignUp;
