import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Contents from './Contents.js';
import Login from './Login.js';
import Chapters from './Chapters.js';
import Nav from './Nav.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.innerHTML = "document.write('This is output by document.write()!')";
    s.src = "https://github.com/websemantics/gh-pages-spa/blob/master/ghspa.js";
    this.instance.appendChild(s);
  }

  render() {
    return <div className="App">
        <script type="text/javascript" src="./ghspa.js"></script>
        <Nav />
        <Switch>
            <Route path="/" component={Contents} exact />
            <Route path="/chapters" component={Chapters} />
            <Route path="/login" component={Login} />
        </Switch>       
    </div>;
  }
}

