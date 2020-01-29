import React from 'react';
import { Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute"

import RegisterForm from "./components/RegisterForm"
import LoginForm from "./components/LoginForm"
import Dashboard from "../src/components/Dashboard/Dashboard"
import Profile from "./components/Profile"



function App() {

  return (
    <div>
      <Route exact path='/' component={LoginForm} />
      <Route exact path='/Register' component={RegisterForm} />
      <Route exact path='/Login' component={LoginForm} />
      <PrivateRoute path='/Profile' component={Profile} />
      <PrivateRoute path='/Dashboard' component={Dashboard}/>
    </div>
  );
}


export default App;


