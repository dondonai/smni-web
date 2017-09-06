import React, { Component } from 'react';
import graph from 'fb-react-sdk';
import $ from 'jquery';
import { FlexVideo } from 'react-foundation';


class Extra extends Component {
  constructor(props) {
    super(props);
    
    let stateMe = "The state";
    this.state = { date: stateMe };
  }

  // componentDidMount() {
  //   this.fbFetch().then(response => {
  //     this.setState({
  //       date: response.videos.data
  //     });
  //   });
  // }

  fbFetch() {
    const access_token = '1696571707319370|dSmXHRVAKW7CD_RDP4EX22I_JIs';
    // var fbEmbed, embedHtml;

    graph.setAccessToken(access_token);

    var options = {
      timeout: 3000,
      pool: { maxSockets: Infinity },
      headers: { connection: "keep-alive" }
    };

    graph
      .setOptions(options)
      .get("105414913766/?fields=username,videos.limit(10){live_status,status,embed_html,length}", (err, res) => {
        console.log(res);
        let videos = res.videos.data;
        // var video;
        $.each(videos, function(i, video) {
            // console.log(video.live_status);
            // Let's get the length of the video in minutes
            // videoLength = video.length;
            // lengthInHour = videoLength / 3600;
            // lengthInMin = lengthInHour * 60;

            // if (video.live_status === "LIVE" ||
            //     video.live_status === "VOD" &&
            //     lengthInMin > 30 &&
            //     video.status.video_status === "ready") {

            //     // Let's assign the returned embed code from Facebook to our var embedHtml
            //     embedHtml = video.embed_html;
            //     console.log(embedHtml);
            //     return false;

            // }
            if (video.live_status === "LIVE" ||
              video.live_status === "VOD") {
                if (video.status.video_status === "ready") {
                  // embedHtml = video.embed_html;
                  return false;
                }
              }
            });
            
            // fbEmbed = video;
            // console.log(fbEmbed);
          });
          
  }

  render() {
    return (
      <FlexVideo isWidescreen>
        <iframe title="fb_embed" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FApolloQuiboloy%2Fvideos%2F10155655408068767%2F&width=1280" width="1280" height="720" scrolling="no" frameBorder="0" allowTransparency="true" allowFullScreen="true"></iframe>
      </FlexVideo>
    );
  }
}

export default Extra;