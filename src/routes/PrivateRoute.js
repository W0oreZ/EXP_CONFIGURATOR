import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, connected, ...rest }) => (
  <Route {...rest} render={(props) => (
    connected
      ? <Component {...props} />
      : <Redirect to='/' />
  )} />
)

export default PrivateRoute;