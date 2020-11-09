import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getUser } from '../../actions/user';

import './styles.css';

const AdminPage = () => {
  const dispatch = useDispatch();

  const { user_email } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div className="account-page">
      <h1 className="account-page-title">Account Details</h1>
      <div className="account-page-body">
        <div className="account-email">
          <h2>Email: </h2>
          <p>{user_email}</p>
        </div>
        <div className="account-settings">
          <Link to="/password">Change your password</Link>
          <Link to="/add-account">Add account to site</Link>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
