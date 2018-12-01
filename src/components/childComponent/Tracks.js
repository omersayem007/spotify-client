import React, { Component } from 'react';
import Player from '../musicPlayer/PlayerArt';
import '../../style/CardStyle.css';

class Tracks extends Component {

  render() {

    return (

   
      <a className="card" href="">
         <Player
      previewUrl={this.props.previewUrl}   
      />
                    
           {/* <span className="card-header" style={{backgroundImage: 'url(http://placeimg.com/400/200/animals)'}}>
                 <span className="card-title">
                   <h3>This is a title for a card</h3>
                 </span>
               </span>
               <span className="card-summary">
                  A summary will also be present. Usually two to three brief sentences about the content on the detail page.
                </span>
               <span className="card-meta">
                    Published: June 18th, 2015
                 </span>  */}
            </a>
    );
}
}

export default Tracks;
