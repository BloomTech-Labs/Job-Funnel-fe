import React from 'react';
import { Route, Switch } from "react-router-dom";

import RegisterForm from "./components/RegisterForm"
import LoginForm from "./components/LoginForm"
import Dashboard from "./components/Dashboard/Dashboard"


function App() {
  return (
    <div>
      <Switch>
        <Route path='/register' component={RegisterForm} />
        <Route path='/login' component={LoginForm} />
      </Switch>

    </div>
  );
}

export default App;
