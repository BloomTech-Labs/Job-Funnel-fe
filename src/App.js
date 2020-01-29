import React from 'react';
import { Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute"

import Login from "./components/Account/Login.js"
import Profile from "./components/Account/Profile.js"
import Register from "./components/Account/Register.js"
import Dashboard from "../src/components/Dashboard/Dashboard"


function App() {

  return (
    <div>
      <Route exact path='/' component={Login} />
      <Route exact path='/Login' component={Login} />
      <Route exact path='/Register' component={Register} />

      <PrivateRoute path='/Profile' component={Profile} />
      <PrivateRoute path='/Dashboard' component={Dashboard}/>
    </div>
  );
}


export default App;


