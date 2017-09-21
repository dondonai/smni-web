import React, { Component } from 'react';
// import graph from 'fb-react-sdk';
import ReactHtmlParser from 'react-html-parser';
import { FlexVideo } from 'react-foundation';


export default class Extra extends Component {
  constructor(props) {
    super(props);
    this.state = {
      embed: null
    }
  }

  componentDidMount() {

    const userId = '105414913766';
    const accessToken = '1696571707319370|dSmXHRVAKW7CD_RDP4EX22I_JIs';

    return fetch('https://graph.facebook.com/' +
        userId +
        '/?fields=username,videos.limit(10){live_status,' +
        'status,' +
        'embed_html,' +
        'length}' +
        '&access_token=' + accessToken)
      .then((response) => response.json())
      .then((responseJson) => {
        let videos = responseJson.videos.data;
        let vodCollected = [];
        // console.log(responseJson);
        videos.forEach( (video) => {
          // console.log(video);
          if (video.live_status === "VOD") {
            // Let's collect the videos from Live
              vodCollected.push(video.embed_html);
              // console.log(video.embed_html);
            }
        });
        // console.log(vodCollected);

        if (videos[0].live_status === undefined) {
          // console.log(videos[0].live_status);
          this.setState({
              embed: vodCollected[0]
          }, () => {
              // What to do with the new state
            //   console.log(this.state.embed);
          });
        } else {
          this.setState({
            embed: videos[0].embed_html
          }, () => {
            // do something with new state
            // console.log(this.state.embed);
          });
        }


      })
      .catch((error) => {
        console.error(error);
      });
  }

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
