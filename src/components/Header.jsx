import React, { Component } from 'react';
import logo from '../images/logo.png';
import { Row, Column } from 'react-foundation';

// import Navigation from './Navigation';

export default class Header extends Component {
    render() {
        const title = "Sonshine Media Network International";

        return (
        <header className="site-header">
          <Row>
          <Column small={12}>
            <img className="logo" src={logo} alt="SMNI" />
            <h1 className="site-title">{title}</h1>
            {/* <Navigation /> */}
          </Column>
          </Row>
        </header>
        );
    }
}