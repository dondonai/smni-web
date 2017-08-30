import React, { Component } from 'react';

class Streaming extends Component {
  render() {
    return (
      <div className="showcase__item streaming">
        <div className="videoWrapper">
          <iframe id="ls_embed_1504014704" title="SMNI Streaming" src="https://livestream.com/accounts/19079954/events/7685105/player?width=960&height=540&enableInfoAndActivity=false&defaultDrawer=&autoPlay=true&mute=false" allowfullscreen></iframe>
        </div>
      </div>
    );
  }
}

export default Streaming;