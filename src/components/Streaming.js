import React, { Component } from 'react';
import { FlexVideo } from 'react-foundation';

class Streaming extends Component {
  render() {
    return (
      <div className="livestream_embed">
        <FlexVideo isWidescreen>
          <iframe width="560" height="315" id="ls_embed_1504014704" title="SMNI Streaming" src="https://livestream.com/accounts/19079954/events/7685105/player?width=960&height=540&enableInfoAndActivity=false&defaultDrawer=&autoPlay=true&mute=false" allowFullScreen></iframe>
        </FlexVideo>
      </div>
    );
  }
}

export default Streaming;