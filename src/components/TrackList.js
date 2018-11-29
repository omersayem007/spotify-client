import React, { Component } from 'react';
import Tracks from './childComponent/Tracks';

class App extends Component {


  render() {

    // this.props.tracks.map((track)=>{
    //    // console.log(track.name);
    //     console.log(track.preview_url)
    // });

    const tracks = this.props.tracks.map((track)=>(

        <Tracks
           
            image={track.album.images[0].url}
             trackName={track.name}
             previewUrl={track.preview_url}
        />


    ))


    return (
      <div>

           {tracks}
        
      </div>
    );
  }
}

export default App;
