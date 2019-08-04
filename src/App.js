import React from 'react';
import Alert from 'react-s-alert';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';


// CONTAINERS
import Login from './containers/Login/Login'
import Dashboard from './containers/Dashboard/Dashboard';
import Employees from './containers/Employees/Employees';

function App() {
  return (
      <Router>
        <Route path='/' exact component={Login}/>
        <Route path='/dashboard' exact component={Dashboard}/>
        <Route path='/employees' exact component={Employees}/>
        <Alert stack={{limit: 2}} />
      </Router>
  );
}

export default App;
