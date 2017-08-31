import React, { Component } from 'react';

import Streaming from './Streaming';
import Extra from './Extra';
import Banner from './Banner';

class Content extends Component {
  render() {
    return (
      <main className="content">
        <div className="wrapper">
          <div className="showcase">
            <Streaming />
            <Extra />
            <div className="group"></div>
          </div>
          <Banner />
        </div>
      </main>
    )
  }
}

export default Content;