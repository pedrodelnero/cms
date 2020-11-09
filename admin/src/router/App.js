import React, { useState } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Cookies from 'universal-cookie';

import { Header, BlogForm, BlogList, SignUp, SignIn, AdminPage, HomePage, ChangePassword, AddAccount, ConfirmNewAccount, Accounts } from '../components';
import AuthApi from '../context/Auth';
import './styles.css';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

const cookies = new Cookies();

// 1. Admin is logged in site TEST
// 2. Admin adds the writer by email
// 2a) that creates the writer account (username, email and the temp password)
// 3. When the writer logs in, he can change the password
// 4. writer has write permissions for site TEST

// 1. The writer creates the account (but doesn't choose a site)
// 2. Admin invites the writer (by manual email) to the site (giving him permissions to write)

const App = () => {
  const [isAuth, setIsAuth] = useState(!!cookies.get('site'));

  return (
    <AuthApi.Provider value={{ isAuth, setIsAuth }}>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <PrivateRoute exact path="/" component={HomePage} authProp={{ isAuth }} />
            <PrivateRoute path="/blogs" component={BlogList} authProp={{ isAuth }} />
            <PrivateRoute path="/blog-form/:id?" component={BlogForm} authProp={{ isAuth }} />
            <PrivateRoute path="/profile" component={AdminPage} authProp={{ isAuth }} />
            <PrivateRoute path="/accounts" component={Accounts} authProp={{ isAuth }} />
            <PrivateRoute path="/password" component={ChangePassword} authProp={{ isAuth }} />
            <PrivateRoute path="/add-account" component={AddAccount} authProp={{ isAuth }} />
            <PrivateRoute path="/confirm-new-account" component={ConfirmNewAccount} authProp={{ isAuth }} />
            <PublicRoute path="/sign-up" component={SignUp} authProp={{ isAuth }} />
            <PublicRoute path="/sign-in" component={SignIn} authProp={{ isAuth }} />
          </Switch>
        </Router>
      </div>
    </AuthApi.Provider>
  );
};
export default App;
