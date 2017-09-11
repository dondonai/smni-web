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
          <iframe width="560" height="315" id="ls_embed_1505004217" title="SMNI Streaming" src="https://livestream.com/accounts/19079954/events/7710670/player?width=960&height=540&enableInfoAndActivity=false&defaultDrawer=&autoPlay=true&mute=false" allowFullScreen></iframe>
        </FlexVideo>
      </div>
    );
  }
}