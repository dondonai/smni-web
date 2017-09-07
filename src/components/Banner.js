import React, { Component } from "react";
import { Row, Column } from "react-foundation";
import AD from 'react-google-publisher-tag';
import AdSense from 'react-adsense';

class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <Row className="display text-center">
          <Column large={8} centerOnLarge>
            <AD path="/309972075/SMNI_Web01" />
            <AdSense.Google client='ca-pub-1938185823940866'
              slot='2172288542'
              style={{display: 'block'}}
              format='auto' />
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