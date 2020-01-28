import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute"

import RegisterForm from "./components/RegisterForm"
import LoginForm from "./components/LoginForm"
import Profile from "./components/Profile"
import Dashboard from "../src/components/Dashboard/Dashboard"


function App() {

  return (
    <div>
      
      <Switch>
        <Route path='/register' component={RegisterForm} />
        <Route path='/login' component={LoginForm} />
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/profile' component={Profile}/>
      </Switch>

    </div>
  );
}


export default App;


