import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import axios from 'axios';

import './styles.css';
import AuthApi from '../../context/Auth';

const Header = () => {
  const { isAuth, setIsAuth } = useContext(AuthApi);
  const cookies = new Cookies();

  const logOut = async () => {
    await axios.post('http://localhost:5000/users/logout', null, {
      headers: {
        Authorization: `Bearer ${cookies.get('token')}`,
      },
    });
    cookies.remove('site', { path: '/' });
    cookies.remove('token', { path: '/' });
    cookies.remove('user', { path: '/' });
    setIsAuth(false);
    window.location.href = '/';
  };

  if (!isAuth) return <div><h1>CMS</h1></div>;

  return (
    <div className="header">
      <h1>CMS</h1>
      <div className="header-links">
        <Link to="/blogs">Blogs</Link>
        <Link to="/blog-form">Add Blog</Link>
      </div>
      <div>
        <button type="button" onClick={() => logOut()}>Sign Out</button>
      </div>
    </div>
  );
};

export default Header;
