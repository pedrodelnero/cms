import React from  'react';
import { Route, Redirect } from  'react-router-dom';

const PublicRoute = ({ authProp, component: Component, ...rest }) => (
  <Route {...rest} component={(props) => (
    authProp.isAuth ? (
      <Redirect to="/" />
    ) : (
        <Component {...props} />
    )
  )} />
);


export default PublicRoute;;