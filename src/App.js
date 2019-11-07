import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header/index';

import Home from './views/Home/index';
import Game from './views/Game/index';
import Game1 from './views/Game1/index';

import './assets/style.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/game" component={Game}/>
          <Route path="/game1" component={Game1}/>
        </Switch>
      </div>
    </Router>
  );
}



export default App;
