import React, { Component } from 'react';
// import graph from 'fb-react-sdk';
import ReactHtmlParser from 'react-html-parser';
import { FlexVideo } from 'react-foundation';


class Extra extends Component {
  constructor(props) {
    super(props);
    this.state = {
      embed: null
    }
  }
  
  componentDidMount() {

    // let userId = '105414913766';

    // let accessToken = '1696571707319370|dSmXHRVAKW7CD_RDP4EX22I_JIs';

    // graph.setAccessToken(accessToken);
    // graph.setVersion("2.10");

    // return fetch('https://www.reddit.com/r/reactjs.json')
    return fetch('https://graph.facebook.com/105414913766?fields=username,videos.limit(10){live_status,status,embed_html,length}&access_token=1696571707319370|dSmXHRVAKW7CD_RDP4EX22I_JIs')
      .then((response) => response.json())
      .then((responseJson) => {
        let videos = responseJson.videos.data;
        // console.log(videos);

        if (videos[0].live_status === undefined) {
          console.log('undefined po ako');
        } else {
          this.setState({
            embed: videos[0].embed_html
          }, function() {
            // do something with new state
            // console.log(this.state.embed);
          });
        }

        if (videos[1].live_status === "VOD") {
          console.log(videos[1].live_status);
          this.setState({
            embed: videos[1].embed_html
          }, function() {
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
          { ReactHtmlParser(this.state.embed) }
        </FlexVideo>
      </div>
    );
  }
}

export default Extra;