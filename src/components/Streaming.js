import React, { Component } from 'react';
import { FlexVideo } from 'react-foundation';
import MetaTags from 'react-meta-tags';
import logo from '../images/logo.png';

export default class Streaming extends Component {
  render() {
    return (
      <div className="livestream_embed">
        <MetaTags>
          <title>SMNI Live Streaming</title>
          <meta id="meta-description" name="description" content="Sonshine Media Network International (SMNI)." />
          <meta id="og-title" property="og:title" content="SMNI" />
          <meta id="og-type" property="og:type" content="website" />
          <meta id="og-image" property="og:image" content={logo} />
        </MetaTags>
        <FlexVideo isWidescreen>
          <iframe width="560" height="315" id="ls_embed_1504014704" title="SMNI Streaming" src="https://livestream.com/accounts/19079954/events/7685105/player?width=960&height=540&enableInfoAndActivity=false&defaultDrawer=&autoPlay=true&mute=false" allowFullScreen></iframe>
        </FlexVideo>
      </div>
    );
  }
}