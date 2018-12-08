import React, { Component } from 'react';
import Tracks from '../childComponent/Tracks';
import '../../style/CardStyle.css';
import PlayerArt from '../musicPlayer/PlayerArt';

class App extends Component {


  render() {

    const tracks = this.props.tracks.map((track)=>(
      <div className="card">
        <PlayerArt
           
            image={track.album.images[0].url}
             trackName={track.name}
             previewUrl={track.preview_url}
        />
      </div>   


    ))


    return (
      <div className="container">
        <div className="cards"> 
            {tracks} 
        </div>
      </div>                        
    );
  }
}

export default App;
