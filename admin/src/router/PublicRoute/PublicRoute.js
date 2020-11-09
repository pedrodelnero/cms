import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ authProp, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={(props) => (
      (authProp.isAuth) ? (
        // if the user is logged in and trying to go to public route
        <Redirect to="/profile" />
      ) : (
      // if the user is not logged in...
        <Component {...props} />
      )
    )}
  />
);

export default PublicRoute;
