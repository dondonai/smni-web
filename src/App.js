import React, { Component } from 'react';

import './App.css';

// My Components
import Streaming from './components/Streaming';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Streaming />
      </div>
    );
  }
}

export default App;
