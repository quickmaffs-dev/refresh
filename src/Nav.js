import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <div className="Nav">
      
      <Link to="/">Contents</Link>
      <br />
      <Link to="/chapters">Chapters</Link>
      <br />
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Nav;
