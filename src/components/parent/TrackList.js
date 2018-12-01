import React, { Component } from 'react';
import Tracks from '../childComponent/Tracks';
import '../../style/CardStyle.css';
import '../musicPlayer/PlayerArt';
import PlayerArt from '../musicPlayer/PlayerArt';

class App extends Component {


  render() {

    // this.props.tracks.map((track)=>{
    //    // console.log(track.name);
    //     console.log(track.preview_url)
    // });

    const tracks = this.props.tracks.map((track)=>(

        <PlayerArt
           
            image={track.album.images[0].url}
             trackName={track.name}
             previewUrl={track.preview_url}
        />


    ))


    return (
      <div>
        <div className="container">
        <div className="cards">

        {tracks}
        
        </div>
                            
        
      </div> 
      </div>
                              
    );
  }
}

export default App;
