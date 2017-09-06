import React, { Component } from "react";
import { Row, Column, Thumbnail } from "react-foundation";

class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <Row className="display text-center">
          <Column large={8} centerOnLarge>
            <Thumbnail src="//unsplash.it/728/90/?blur" alt="" />
          </Column>
          <Column small={12}>
            <h4>Advertiser</h4>
          </Column>
        </Row>
      </div>
    );
  }
}

export default Banner;
