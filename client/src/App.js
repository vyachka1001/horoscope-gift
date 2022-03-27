import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages'
import LogInPage from './pages/log-in-page';
import SignUpPage from './pages/sign-up-page';
import AriesPage from './pages/zodiac-pages/aries-page';
import TaurusPage from './pages/zodiac-pages/taurus-page';
import GeminiPage from './pages/zodiac-pages/gemini-page';
import CancerPage from './pages/zodiac-pages/cancer-page';
import LeoPage from './pages/zodiac-pages/leo-page';
import VirgoPage from './pages/zodiac-pages/virgo-page';
import LibraPage from './pages/zodiac-pages/libra-page';
import ScorpioPage from './pages/zodiac-pages/scorpio-page';
import SagittariusPage from './pages/zodiac-pages/sagittarius-page';
import CapricornPage from './pages/zodiac-pages/capricorn-page';
import AquariusPage from './pages/zodiac-pages/aquarius-page';
import PiscesPage from './pages/zodiac-pages/pisces-page';

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
        {/* <Route path="/zodiac" component={Home} exact/> */}

      </Switch>
    </Router>
  );
}

export default App;
