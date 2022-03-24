import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages'
import LogInPage from './pages/log-in-page';
import SignUpPage from './pages/sign-up-page';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/login" component={LogInPage} exact/> 
        <Route path="/signup" component={SignUpPage} exact/> 
      </Switch>
    </Router>
  );
}

export default App;
