import React, { Component } from "react";
import { Row, Column, Thumbnail } from 'react-foundation';
import gutd from '../images/gutd.jpg';
import pl from '../images/pl.jpg';
import sow from '../images/sow.jpg';
import classics from '../images/classics.jpg';
import itestify from '../images/itestify.jpg';
import kict from '../images/kict.jpg';
import asow from '../images/asow.jpg';
import excerpts from '../images/excerpts.jpg';
import anewme from '../images/anewme.png';

class Playlist extends Component {
  render() {
    return (
      <div className="playlist">
        <Row upOnSmall={1} upOnMedium={3}>
          <Column>
            <a href="https://www.youtube.com/playlist?list=PLBvNelqMoACDhLuh6Ohb9S7dPg70U5tCT" title="Give Us This Day" target="_blank" rel="noopener noreferrer"><Thumbnail src={gutd} alt="Give Us This Day" /></a>
          </Column>
          <Column>
            <a href="https://www.youtube.com/playlist?list=PLBvNelqMoACDq83y9R3IKvJlQLX3uoCJ7" title="Powerline" target="_blank" rel="noopener noreferrer"><Thumbnail src={pl} alt="Powerline" /></a>
          </Column>
          <Column>
            <a href="https://www.youtube.com/playlist?list=PLBvNelqMoACDSkyJmLsOSVvmJjPbGwcA_" title="Sounds of Worship" target="_blank" rel="noopener noreferrer"><Thumbnail src={sow} alt="Sounds of Worship" /></a>
          </Column>
          <Column>
            <a href="https://www.youtube.com/playlist?list=PLBvNelqMoACCC4f5Jb3iG3bb_8LXasanR" title="ACQ Classics" target="_blank" rel="noopener noreferrer"><Thumbnail src={classics} alt="ACQ Classics" /></a>
          </Column>
          <Column>
            <a href="https://www.youtube.com/playlist?list=PLBvNelqMoACCKcUBQE3s9Q4vnwMELszDu" title="iTestify" target="_blank" rel="noopener noreferrer"><Thumbnail src={itestify} alt="iTestify" /></a>
          </Column>
          <Column>
            <a href="https://www.youtube.com/playlist?list=PLBvNelqMoACBsRqJd-cb2Kj_Br4a4cNrH" title="King is Coming Tour" target="_blank" rel="noopener noreferrer"><Thumbnail src={kict} alt="King Is Coming Tour" /></a>
          </Column>
          <Column>
            <a href="https://www.youtube.com/user/marialoren0523/playlists" title="Annointed Songs of Worship" target="_blank" rel="noopener noreferrer"><Thumbnail src={asow} alt="Annointed Songs of Worship" /></a>
          </Column>
          <Column>
            <a href="https://www.youtube.com/playlist?list=PLBvNelqMoACAXEeJprGJcUOEk2sClDIwM" title="PACQ Excerpts" target="_blank" rel="noopener noreferrer"><Thumbnail src={excerpts} alt="PACQ Excerpts" /></a>
          </Column>
          <Column>
            <a href="https://www.youtube.com/playlist?list=PLBvNelqMoACA_DD4DYK0Vj5RApPy4U77h" title="A New Me" target="_blank" rel="noopener noreferrer"><Thumbnail src={anewme} alt="A New Me" /></a>
          </Column>
        </Row>
      </div>
    );
  }
}

export default Playlist;