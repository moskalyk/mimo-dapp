import React from 'react';
import logo from '../logo.svg';

const Navbar = props => {
  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src={logo} className="App-logo" alt="logo" width="112" height="28" />
          </a>
        </div>
      </nav>
    </div>
  );
}


export default Navbar;
