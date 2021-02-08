import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Contents from './Contents.js';
import Login from './Login.js';
import Chapters from './Chapters.js';
import Nav from './Nav.js';

function App() {
  return (
    <div className="App">
        <script type="text/javascript" src="./ghspa.js"></script>
        <Nav />
        <Switch>
            <Route path="/" component={Contents} exact />
            <Route path="/chapters" component={Chapters} />
            <Route path="/login" component={Login} />
        </Switch>       
    </div>
  );
}

export default App;
