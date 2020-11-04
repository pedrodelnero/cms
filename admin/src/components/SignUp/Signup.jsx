import React, { useState, useContext } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

import './styles.css';
import AuthApi from '../../context/Auth';

const SignUp = () => {
  const { setIsAuth } = useContext(AuthApi);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [site, setSite] = useState('');
  const cookies = new Cookies();

  // Need error handling for emails already in use
  //   How to find display error message from API in reactjs
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/users', { site, name, email, password });

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
          <button type="submit">Sign Up</button>
          <a href="/sign-in">Already have an account? Sign in</a>
        </form>
      </div>
    </>
  );
};

export default SignUp;
