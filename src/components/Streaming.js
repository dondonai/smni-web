import React, { Component } from 'react';
import { FlexVideo } from 'react-foundation';
import { Helmet } from 'react-helmet';
import logo from '../images/logo.png';

export default class Streaming extends Component {
  render() {
    return (
      <div className="livestream_embed">
        <Helmet>
          <meta charSet="utf-8" />
          <title>SMNI Live Streaming</title>
          <meta name="description" content="Sonshine Media Network International (SMNI)" />
          <link rel="canonical" href="https://smni.com/awesome" />
          <meta property="og:title" content="Sonshine Media Network International" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://smni.com/" />
          <meta property="og:image" content={logo} />
          <meta property="og:site_name" content="Sonshine Media Network International" />
          <meta property="og:description" content="Sonshine Media Network International" />
          <meta itemprop="image" content={logo} />
        </Helmet>
        <FlexVideo isWidescreen>
          <iframe title="SMNI Online Streaming" allowFullScreen frameBorder="0" src="http://smni.live-s.cdn.bitgravity.com:1935/content:cdn-live/smni/live/feed001?width=590&height=390&streamType=live&AutoPlay=true&ScrubMode=simple&BufferTime=1.5&AutoBitrate=off&scaleMode=letterbox&DefaultRatio=1.777778&LogoPosition=topleft&ColorBase=0&ColorControl=14277081&ColorHighlight=16777215&ColorFeature=14277081&selectedIndex=0" width="560" height="315"></iframe>
        {/* <iframe title="SMNI Live Streaming" id="ls_embed_1505800697" src="https://livestream.com/accounts/19079954/events/7733798/player?width=640&height=360&enableInfoAndActivity=true&defaultDrawer=&autoPlay=true&mute=false" width="640" height="360" frameBorder="0" scrolling="no" allowFullScreen></iframe> */}
        </FlexVideo>
      </div>
    );
  }
}
