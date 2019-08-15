import React from 'react';
import Alert from 'react-s-alert';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';


// CONTAINERS
import Login from './containers/Login/Login'
import Dashboard from './containers/Dashboard/Dashboard';
import Employees from './containers/Employees/Employees';
import Quiz from './containers/Quiz/Quiz';
import ManageQuiz from './containers/ManageQuiz/ManageQuiz';

// 404 Page
import Page404 from './Pages/Page404'


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/aa' exact component={Login} />
        <Route path='/dashboard' exact component={Dashboard} />
        <Route path='/employees' exact component={Employees} />
        <Route path='/quiz' exact component={Quiz} />
        <Route path='/' exact component={ManageQuiz} />
        <Route component={Page404} />
      </Switch>
      <Alert stack={{ limit: 2 }} />
    </Router>
  );
}

export default App;
