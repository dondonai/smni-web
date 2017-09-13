import React, { Component } from 'react';
import ReactGA from 'react-ga';
import './App.css';

// My Components
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

ReactGA.initialize('UA-19600826-23');

export default class App extends Component {

  componentDidMount() {
    ReactGA.set({ page: window.location.pathname + window.location.search });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

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
