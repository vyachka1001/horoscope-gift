import React, {useContext} from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import AppRouter from './components/routes/app-router'
import {observer} from 'mobx-react-lite';
import {Context} from './index'

const App = observer( () => {
  const {} = useContext(Context)

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
})

export default App;
