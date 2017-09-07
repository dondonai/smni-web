import React, { Component } from "react";
import { Row, Column } from "react-foundation";
import Streaming from "./Streaming";
import Extra from './Extra';
import Playlist from "./Playlist";
import Banner from "./Banner";

export default class Content extends Component {
  render() {
    return (
      <main className="content">
        <Row className="display" uncollapseOnLarge>
          <Column small={12} large={6}>
            <Streaming />
          </Column>
          <Column small={12} large={6}>
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