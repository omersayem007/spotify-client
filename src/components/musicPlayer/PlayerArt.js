import React, { Component } from 'react';
import './PlayerStyle.css';
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FinePlayer from './FinePlayer';

class PlayerArt extends Component {

  render() {
    return (
      
      <div >

          <div className="player-title" ><b></b><br /> {this.props.trackName}</div>

          <img id="art" src={this.props.image} className="album-artwork" alt="nothing"  />
          <br />

          <div>
            <FinePlayer
            previewUrl={this.props.previewUrl}
            />
          </div>


      </div>

    );
  }
}

export default PlayerArt;
