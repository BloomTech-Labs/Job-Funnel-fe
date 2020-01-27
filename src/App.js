import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";

import RegisterForm from "./components/RegisterForm"
import LoginForm from "./components/LoginForm"
import DashboardCards from "./components/DashboardCards"


function App() {
  return (
    <div>
      <DashboardCards/>
      
      <Switch>
        <Route path='/register' component={RegisterForm} />
        <Route path='/login' component={LoginForm} />
        <Route path='/dashboard' component={DashboardCards} />
      </Switch>

    </div>
  );
}

export default App;
