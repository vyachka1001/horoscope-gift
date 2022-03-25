import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages'
import LogInPage from './pages/log-in-page';
import SignUpPage from './pages/sign-up-page';
import AriesPage from './pages/zodiac-pages/aries-page';
import TaurusPage from './pages/sign-up-page';
import GeminiPage from './pages/sign-up-page';
import CancerPage from './pages/sign-up-page';
import LeoPage from './pages/sign-up-page';
import VirgoPage from './pages/sign-up-page';
import LibraPage from './pages/sign-up-page';
import ScorpioPage from './pages/sign-up-page';
import SagittariusPage from './pages/sign-up-page';
import CapricornPage from './pages/sign-up-page';
import AquariusPage from './pages/sign-up-page';
import PiscesPage from './pages/sign-up-page';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/login" component={LogInPage} exact/> 
        <Route path="/signup" component={SignUpPage} exact/> 
        <Route path="/aries" component={AriesPage} exact/> 
        <Route path="/taurus" component={TaurusPage} exact/> 
        <Route path="/gemini" component={GeminiPage} exact/> 
        <Route path="/cancer" component={CancerPage} exact/> 
        <Route path="/leo" component={LeoPage} exact/> 
        <Route path="/virgo" component={VirgoPage} exact/> 
        <Route path="/libra" component={LibraPage} exact/> 
        <Route path="/scorpio" component={ScorpioPage} exact/> 
        <Route path="/sagittarius" component={SagittariusPage} exact/> 
        <Route path="/capricorn" component={CapricornPage} exact/> 
        <Route path="/aquarius" component={AquariusPage} exact/> 
        <Route path="/pisces" component={PiscesPage} exact/> 
        <Route path="/zodiac" component={Home} exact/>

      </Switch>
    </Router>
  );
}

export default App;
