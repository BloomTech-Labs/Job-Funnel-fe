import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, useLocation } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute.js"

import Login from "./components/Account/Login.js"
import Profile from "./components/Account/Profile.js"
import Register from "./components/Account/Register.js"
import Dashboard from "../src/components/Dashboard/Dashboard"
import Header from './components/Header.js'
import Footer from './components/Footer';
import LandingPage from './components/Account/LandingPage';
import JobDetails from "./components/Dashboard/Jobs/JobDetails"
import AboutUs from './components/AboutUs';

import { getCurrentUser, } from './redux-store/App/AppActions.js';


function App(props) {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('css/index.css');
  const location = useLocation();

  useEffect(() => {
    if (!props.loginFailed && !props.currentUser && sessionStorage.getItem('token')) {
      props.getCurrentUser();
      setLoading(false);
    }
    else {
      setLoading(false);
    }
  }, [props.currentUser])

  const changeTheme = (e) => {
    setTheme(e.target.value);
  }


  return (
    <div>
      <link rel="stylesheet" type="text/css" href={theme} />
      <Header changeTheme={changeTheme} />
      <Route exact path='/' component={LandingPage} />

      <Route exact path='/Login' component={Login} />
      <Route exact path='/Register' component={Register} />
      <Route exact path='/About' component={AboutUs} />
      <PrivateRoute path='/Profile' component={Profile} />
      <PrivateRoute path='/Dashboard' component={Dashboard} />
      <PrivateRoute exact path='/Dashboard/Job/:id' component={JobDetails} />
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

