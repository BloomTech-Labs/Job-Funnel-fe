import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute"

import RegisterForm from "./components/RegisterForm"
import LoginForm from "./components/LoginForm"
import Dashboard from "../src/components/Dashboard/Dashboard"
import SignInSide from "../src/components/RegisterFormUI.js"
import SignIn from "../src/components/LoginFormUI.js"


function App() {

  return (
    <div>
      
      <Switch>
        <Route path='/register' component={RegisterForm} />
        <Route path='/login' component={LoginForm} />
        <PrivateRoute path='/dashboard' component={Dashboard}/>
        <Route path='/testing' component={SignInSide}/>
        <Route path='/testing2' component={SignIn}/>
      </Switch>

    </div>
  );
}


export default App;


