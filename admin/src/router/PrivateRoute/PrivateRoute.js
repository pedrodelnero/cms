import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ authProp, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={(props) => (
      authProp.isAuth ? (
        <div>
          <Component {...props} />
        </div>
      ) : (
        <Redirect to="/sign-up" />
      )
    )}
  />
);

export default PrivateRoute;
