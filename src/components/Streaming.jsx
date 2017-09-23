import React, { Component } from 'react';
import { FlexVideo } from 'react-foundation';

export default class Streaming extends Component {
  render() {
    return (
      <div className="livestream_embed">
        <FlexVideo isWidescreen>
          <iframe title="SMNI Online Streaming" allowFullScreen frameBorder="0" src="http://smni.live-s.cdn.bitgravity.com:1935/content:cdn-live/smni/live/feed001?width=590&height=390&streamType=live&AutoPlay=true&ScrubMode=simple&BufferTime=1.5&AutoBitrate=off&scaleMode=letterbox&DefaultRatio=1.777778&LogoPosition=topleft&ColorBase=0&ColorControl=14277081&ColorHighlight=16777215&ColorFeature=14277081&selectedIndex=0" width="560" height="315"></iframe>
        {/* <iframe title="SMNI Live Streaming" id="ls_embed_1505800697" src="https://livestream.com/accounts/19079954/events/7733798/player?width=640&height=360&enableInfoAndActivity=true&defaultDrawer=&autoPlay=true&mute=false" width="640" height="360" frameBorder="0" scrolling="no" allowFullScreen></iframe> */}
        </FlexVideo>
      </div>
    );
  }
}
