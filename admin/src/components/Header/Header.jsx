import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Cookies from 'universal-cookie';

import './styles.css';
import AuthApi from '../../context/Auth';
import { userLogOut } from '../../actions/user';

const cookies = new Cookies();

const Header = () => {
  const { isAuth, setIsAuth } = useContext(AuthApi);
  const dispatch = useDispatch();

  const logOut = async () => {
    dispatch(userLogOut());
    setIsAuth(false);
    window.location.href = '/';
  };

  if (!isAuth) return <div><h1>CMS</h1></div>;

  return (
    <div className="header">
      <h1>CMS</h1>
      <div className="header-links">
        <Link to="/">Home</Link>
        <Link to="/profile">My Profile</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/blog-form">Add Blog</Link>
        <Link to="/accounts">Accounts</Link>
      </div>
      <div>
        <button type="button" onClick={() => logOut()}>Sign Out</button>
      </div>
    </div>
  );
};

export default Header;
