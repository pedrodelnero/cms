import React, { useState } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Cookies from 'universal-cookie';
import CssBaseline from '@material-ui/core/CssBaseline';

import { CreatePage, PageList, Header, Footer, BlogForm, BlogList, SignUp, SignIn, AdminPage, HomePage, ChangePassword, AddAccount, ConfirmNewAccount, EnhancedTable, SideNavBar } from '../components';
import AuthApi from '../context/Auth';
import useStyles from './styles.js';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

const cookies = new Cookies();

const App = () => {
  const classes = useStyles();
  const [isAuth, setIsAuth] = useState(!!cookies.get('site'));
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <AuthApi.Provider value={{ isAuth, setIsAuth, mobileOpen, setMobileOpen }}>
      <div className={classes.app}>
        <CssBaseline />
        <Router>
          <Header className={classes.header} />
          <div className={classes.body}>
            {isAuth && <SideNavBar className={classes.sidebar} />}
            <main className={classes.content}>
              <Switch>
                <PrivateRoute exact path="/" component={HomePage} authProp={{ isAuth }} />
                <PrivateRoute path="/blogs" component={BlogList} authProp={{ isAuth }} />
                <PrivateRoute path="/blog-form/:id?" component={BlogForm} authProp={{ isAuth }} />
                {/* <PrivateRoute path="/blogs" component={BlogList} authProp={{ isAuth }} /> */}
                <PrivateRoute path="/pages" component={PageList} authProp={{ isAuth }} />
                <PrivateRoute path="/page-form/:id?" component={CreatePage} authProp={{ isAuth }} />
                <PrivateRoute path="/profile" component={AdminPage} authProp={{ isAuth }} />
                <PrivateRoute path="/accounts" component={EnhancedTable} authProp={{ isAuth }} />
                <PrivateRoute path="/password" component={ChangePassword} authProp={{ isAuth }} />
                <PrivateRoute path="/add-account" component={AddAccount} authProp={{ isAuth }} />
                <PrivateRoute path="/confirm-new-account" component={ConfirmNewAccount} authProp={{ isAuth }} />
                <PublicRoute path="/sign-up" component={SignUp} authProp={{ isAuth }} />
                <PublicRoute path="/sign-in" component={SignIn} authProp={{ isAuth }} />
              </Switch>
            </main>
          </div>
        </Router>
        <Footer />
      </div>
    </AuthApi.Provider>
  );
};
export default App;
