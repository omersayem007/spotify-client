import React, { Component } from 'react';


class Tracks extends Component {

  render() {
    return (
          <div className="card">
  <div className="card-image">
    <figure className="image is-3by1">
      <img src={this.props.image} alt="piture"/>>
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-left">
        <figure className="image is-48x48">
          
        </figure>
      </div>
      <div className="media-content">
        <p className="title is-4">{this.props.trackName}</p>
        <p className="subtitle is-6"><a href={this.props.previewUrl}>{this.props.previewUrl}</a></p>
      </div>
    </div>

    <div className="content">
      
      <br/>
      
    </div>
  </div>
</div>
    );
  }
}

export default Tracks;
