import React, { Component } from 'react';

import Player from './Player';
import './App1.css'

// import settings from './settings';
// import '../../style/FinePlayer.css'

class FinePlayer extends Component {
  constructor() {
    super();

    this.state = {
      song_src: "",
      files: []
    };

    // // settings((err, conf) => {
    // //   if (err) {
    // //     return console.log(err);
    // //   }
    // //   load_files(conf.song_root, (err, files) => {
    // //     this.setState({ files: files });
    // //     this.onPlayerNext();
    // //   });
    // });


    //this.history = [];
  }
  onSongDone(src) {
    this.onPlayerNext();
  }
  onPlayerNext() {
    if (this.props.previewUrl) {
      this.history.push(this.props.previewUrl);
    }
    // do {
    //   song = this.state.files[Math.floor(Math.random() * this.state.files.length)];
    // } while (this.history.length > 0 && this.history[history.length - 1] === song);

    // this.setState({
    //   song_src: song
    // });
  }
  onPlayerPrev() {
    this.setState({
      song_src: this.history.pop()
    });
  }
  render() {
    
  const music= this.state.files.map((x)=>(
     <Player
     src={this.props.previewUrl}
     onDone={this.onSongDone.bind(this)}
       onNext={this.onPlayerNext.bind(this)}
      onPrev={this.onPlayerPrev.bind(this)}
    />
      
    ));

  //console.log(this.props.previewUrl)

    return (
      <div className="app">
      
        {music}

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
