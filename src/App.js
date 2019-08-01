import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// CONTAINERS
import Login from './containers/Login/Login'

function App() {
  return (
      <Router>
        <Route to='' component={Login}/>
      </Router>
  );
}

export default App;
