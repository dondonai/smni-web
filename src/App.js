import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';
import './App.css';
import logo from './images/logo.png';

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
        <Helmet>
          <meta charSet="utf-8" />
          <title>SMNI Live Streaming</title>
          <meta name="description" content="Sonshine Media Network International (SMNI)" />
          <link rel="canonical" href="https://smni.com/" />
          <meta property="og:title" content="Sonshine Media Network International" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://smni.com/" />
          <meta property="og:image" content={logo} />
          <meta property="og:site_name" content="Sonshine Media Network International" />
          <meta property="og:description" content="Sonshine Media Network International" />
          <meta itemprop="image" content={logo} />
        </Helmet>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}
