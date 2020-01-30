import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute"
import styled from "styled-components";
import LoadingOverlay from "react-loading-overlay";

import Login from "./components/Account/Login.js"
import Profile from "./components/Account/Profile.js"
import Register from "./components/Account/Register.js"
import Dashboard from "../src/components/Dashboard/Dashboard"
import Footer from './components/Footer';


import { getCurrentUser, } from './redux-store/App/AppActions.js';


function App(props) {
  const [loading, setLoading] = useState(true);

  console.log('app.js props.currentuser', props.currentUser);

  useEffect(() => {
    //if currentUser is null, load data from server if you have a token. 
    //otherwise if you don't have a token you will be unable to access private routes and will be redirected to login page if you try.
    // login failed is there to prevent it from infinitely trying to connect to the server if the server is down or something.
      if (!props.loginFailed && !props.currentUser && sessionStorage.getItem('token')){
        props.getCurrentUser();
        setLoading(false);
      }
      else{
        setLoading(false);
      }
  }, [props.currentUser])

  return (
    <div>
      {/* header goes here so loading spinner doesn't show on top of it */}
      <StyledLoader active={loading} spinner text='Loading...'>
        <Route exact path='/' component={Login} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/Register' component={Register} />

        <Route path='/Profile' component={Profile} />
        <PrivateRoute path='/Dashboard' component={Dashboard}/>
      </StyledLoader>
      <Footer />
    </div>
  );
}

const mapStateToProps = state => {
  // console.log('mapstatetoprops: ', state);
  return {
      currentUser: state.AppReducer.currentUser,
      otherUser: state.AppReducer.otherUser,
      loading: state.AppReducer.loading,
      loginFailed: state.AppReducer.loginFailed,
  }
}

export default connect(mapStateToProps, { getCurrentUser, })(App)

const StyledLoader = styled(LoadingOverlay)`
    min-height: 100vh;
    width:100%;
    z-index: 2;
`;

