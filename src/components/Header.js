import React, { Component } from 'react';
import logo from '../images/logo.jpg';

import Navigation from './Navigation';

class Header extends Component {
    render() {
        return (
        <header className="site-header">
          <div className="wrapper">
            <img className="logo" src={logo} alt="SMNI" />
            <Navigation />
          </div>
        </header>
        );
    }
}

export default Header;