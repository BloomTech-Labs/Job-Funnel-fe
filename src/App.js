import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Route, Switch } from "react-router-dom";

import RegisterForm from "./components/RegisterForm"
import LoginForm from "./components/LoginForm"
import DashboardExample from "./components/Dashboard/DashboardExample"



function App() {

  return (
    <div>
      <Switch>
        <Route path='/register' component={RegisterForm} />
        <Route path='/login' component={LoginForm} />
        <Route path='/dashboardexample' component={DashboardExample}/>
      </Switch>

    </div>
  );
}


export default App;


