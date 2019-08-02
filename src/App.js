import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// CONTAINERS
import Login from './containers/Login/Login'
import Dashboard from './containers/Dashboard/Dashboard';
import Employees from './containers/Employee/Employees';

function App() {
  return (
      <Router>
        <Route path='/' exact component={Login}/>
        <Route path='/dashboard' exact component={Dashboard}/>
        <Route path='/employees' exact component={Employees}/>
      </Router>
  );
}

export default App;
