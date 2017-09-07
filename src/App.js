import React, { Component } from 'react';

import './App.css';

// My Components
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}