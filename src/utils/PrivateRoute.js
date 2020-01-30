import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        // console.log('route props?', rest.currentUser)
        if (sessionStorage.getItem('token')) {
          //render component if user is logged in and has a token
          return <Component {...props} />;
        }
        else {
          alert('You must be logged in to view this page.');
          return <Redirect to='/Login' />;
        }
      }}
    />
  );
};

export default PrivateRoute;