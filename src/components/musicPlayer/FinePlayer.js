import React, { Component } from 'react';
import Player from './Player';

class FinePlayer extends Component {

  onSongDone(src) {
    this.onPlayerNext();
  }
  onPlayerNext() {
    if (this.props.previewUrl) {
      this.history.push(this.props.previewUrl);
    }
  }
  onPlayerPrev() {
    this.setState({
      song_src: this.history.pop()
    });
  }
  render() {

    return (
      <div>

        <Player
          src={this.props.previewUrl}
          onDone={this.onSongDone.bind(this)}
          onNext={this.onPlayerNext.bind(this)}
          onPrev={this.onPlayerPrev.bind(this)}
        />
      
      </div>
    );
  }
}

export default FinePlayer;
