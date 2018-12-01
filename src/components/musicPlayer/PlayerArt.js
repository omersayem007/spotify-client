import React, { Component } from 'react';
import './PlayerStyle.css';
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FinePlayer from './FinePlayer';

class PlayerArt extends Component {

  render() {
    return (
      <div>
        <div className="player-container">
          <div className="player-title"><b>Blackbear</b><br /> wish you the best</div>
          <img id="art" src="https://static.qobuz.com/images/covers/82/17/0060255781782_600.jpg" className="album-artwork" alt="nothing" />
          <br />


          <div>
            <FinePlayer
            previewUrl={this.props.previewUrl}
            
            />
          </div>
          
          {/* <div className="controls"><i className="fa fa-backward" aria-hidden="true" /></div>
          <div className="controls play"><i id="play-btn"><FontAwesomeIcon icon={faPlay} /></i></div>
          <div className="controls"><i className="fa fa-forward" aria-hidden="true" /></div>
          <div className="bar-container">
            <span id="seekObjContainer">
              <progress className="progress-ting" id="seekObj" value={0} max={1}><div className="bar-ball" /></progress>
            </span>
            <br />
            <small style={{float: 'left', position: 'relative', left: 0, top: '-15px'}} className="start-time">00.00</small>
            <small style={{float: 'right', position: 'relative', right: 0, top: '-15px'}} className="end-time">0.00</small>
          </div> */}

        {/* </div>
        {/* SOUNDS */}
        {/* <audio id="sound1">
          <source src="https://p.scdn.co/mp3-preview/0b90429fd554bad6785faa2b8931d613db4a0ee4?cid=bfa1647a0ecc4a70ab4422e2bb0c89c1" type="audio/mp3" />
        </audio>
        <div className="audio-wrapper" id="player-container" href="nothing">
          <audio id="player" ontimeupdate="initProgressBar()">
            <source src="https://p.scdn.co/mp3-preview/0b90429fd554bad6785faa2b8931d613db4a0ee4?cid=bfa1647a0ecc4a70ab4422e2bb0c89c1" type="audio/mp3" />
          </audio>
        </div> */}
      </div>
      </div>

    );
  }
}

export default PlayerArt;
