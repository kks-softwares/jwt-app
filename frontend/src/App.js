import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Switch, Route, Redirect} from "react-router-dom"
import Login from './components/Login';
// import User from './components/User';
import Logout from './components/Logout';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Dashboard from './components/Dashboard';
import Link1 from './components/Link1';

function App() {
  return (
    <Switch>
      <Route exact path= "/" component={Login} />
      {/* <Route path= "/user" component={User} /> */}
      <Route path= "/user" component={Dashboard} />
      <Route path= "/link_1" component={Link1} />
      <Route path= "/logout" component={Logout} />

      <Redirect exact to="/"/>
    </Switch>
  );
}

export default App;
