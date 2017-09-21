import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { FlexVideo } from 'react-foundation';
import Extra from './Extra';


export default class FacebookSource extends Component {
  render() {
    return (
      <div>
        <FlexVideo isWidescreen>
          {/* <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FApolloQuiboloy%2Fvideos%2F10155682732083767%2F&width=640" width="640" height="360" frameborder="0" allowTransparency="true" allowFullScreen="true" title="FB Live"></iframe> */}
          { ReactHtmlParser(this.state.embed) }
        </FlexVideo>
      </div>
    );
  }
}
