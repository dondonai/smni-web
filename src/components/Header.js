import React, { Component } from 'react';
import logo from '../images/logo.jpg';

// import Navigation from './Navigation';

class Header extends Component {
    render() {
        const title = "Sonshine Media Network International";

        return (
        <header className="site-header">
          <div className="wrapper">
            <img className="logo" src={logo} alt="SMNI" />
            <h1 className="site-title">{title}</h1>
            {/* <Navigation /> */}
          </div>
        </header>
        );
    }
}

export default Header;