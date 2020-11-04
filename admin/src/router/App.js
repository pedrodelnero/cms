import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Cookies from 'universal-cookie';

import { Header, BlogForm, BlogList, SignUp, SignIn, HomePage } from '../components';
import AuthApi from '../context/Auth';
import './App.css';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const cookies = new Cookies();

  useEffect(() => {
    const user = cookies.get('user');
    if (user) setIsAuth(true);

    // if no token => remove cookies
  }, [cookies]);

  return (
    <AuthApi.Provider value={{ isAuth, setIsAuth }}>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <PrivateRoute exact path="/" component={HomePage} authProp={{ isAuth }} />
            <PrivateRoute exact path="/blogs" component={BlogList} authProp={{ isAuth }} />
            <PrivateRoute path="/blog-form/:id?" component={BlogForm} authProp={{ isAuth }} />
            <PublicRoute path="/sign-up" component={SignUp} authProp={{ isAuth }} />
            <PublicRoute path="/sign-in" component={SignIn} authProp={{ isAuth }} />
          </Switch>
        </Router>
      </div>
    </AuthApi.Provider>
  );
};
export default App;

/*
  return (
    <AuthApi.Provider value={{ isAuth, setIsAuth }}>
      <div className="App">
        <Router>
          <Header />
          <Switch>
              <Route exact path="/" component={BlogList} authProp={{ isAuth }}/>
              <Route path="/blog-form/:id?" component={BlogForm}/>
              <Route path="/sign-up" component={SignUp}/>
          </Switch>
        </Router>
      </div>
    </AuthApi.Provider>
  )
  */
