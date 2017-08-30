import React, { Component } from 'react';

import Streaming from './Streaming';

class Content extends Component {
  render() {
    return (
      <main className="content">
        <div className="wrapper">
          <div className="showcase">
            <Streaming />
            <div className="showcase__item extra">
            </div>
            <div className="group"></div>
          </div>
          <div className="banner">This is a place you put the banner.</div>
        </div>
      </main>
    )
  }
}

export default Content;