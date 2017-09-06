import React, { Component } from "react";
import { Row, Column } from "react-foundation";
import Streaming from "./Streaming";
import Extra from './Extra';
import Playlist from "./Playlist";
import Banner from "./Banner";

class Content extends Component {
  render() {
    return (
      <main className="content">
        <Row className="display" uncollapseOnLarge>
          <Column small={12} large={6}>
            <Streaming />
          </Column>
          <Column small={12} large={6}>
            {/* <Thumbnail src="//unsplash.it/g/570/426/?blur" alt="" /> */}
            <Extra />
          </Column>
        </Row>
        <hr />
        <Banner />
        <hr />
        <Playlist />
        <hr />
        <Banner />
        <hr />
      </main>
    );
  }
}

export default Content;
