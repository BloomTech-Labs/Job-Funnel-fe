import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute"

import RegisterForm from "./components/RegisterForm"
import LoginForm from "./components/LoginForm"
import DashboardExample from "./components/Dashboard/DashboardExample"



function App() {

  return (
    <div>
      <Switch>
        <Route path='/register' component={RegisterForm} />
        <Route path='/login' component={LoginForm} />
        <PrivateRoute path='/dashboardexample' component={DashboardExample}/>
      </Switch>

    </div>
  );
}


export default App;


