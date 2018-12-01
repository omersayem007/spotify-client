import React, { Component } from 'react';
import './Theme.css';
import TrackList from '../parent/TrackList'

class Theme extends Component {

    handleArtist=(e)=>{

        this.props.handleArtistChange(e.target.value);
    }

    componentDidMount(){

        let searchBox = document.getElementById('searchbox'),
    searchInput = document.getElementById('search-input'),
    searchClose = document.getElementById('searchbox-close'),
    searchLink = document.getElementById('search');

let searchToggle = () => {
  if (searchBox.className === 'show') {
    searchBox.className = 'hide';
    searchLink.className = '';
    searchInput.value = '';
    searchInput.blur();
    this.props.handleEnterClick();
  } else {
    searchBox.className = 'show';
    searchLink.className = 'active';
    searchInput.focus();
  }
}, searchEnter = (event) => {
    if (event.key == 'Enter') {
      searchToggle();
    }
};

searchLink.addEventListener('click', searchToggle);
searchClose.addEventListener('click', searchToggle);
searchInput.addEventListener('keyup', searchEnter);

}
    
  render() {
    return (
      <div>
          <div class="header">
  <a id="search" href="#">
    <svg viewbox="0 0 48 48"><path d="M31 28h-1.59l-.55-.55C30.82 25.18 32 22.23 32 19c0-7.18-5.82-13-13-13S6 11.82 6 19s5.82 13 13 13c3.23 0 6.18-1.18 8.45-3.13l.55.55V31l10 9.98L40.98 38 31 28zm-12 0c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9z"/></svg>
  </a>
</div>
<div id="searchbox">
  <svg class="magnify" viewbox="0 0 48 48"><path d="M31 28h-1.59l-.55-.55C30.82 25.18 32 22.23 32 19c0-7.18-5.82-13-13-13S6 11.82 6 19s5.82 13 13 13c3.23 0 6.18-1.18 8.45-3.13l.55.55V31l10 9.98L40.98 38 31 28zm-12 0c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9z"/></svg>
  <svg id="searchbox-close" class="close" viewbox="0 0 24 24"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
  <input id="search-input" type="text" placeholder="Search..."  onChange={this.handleArtist}/>
</div>
<div class="content">
  <TrackList
  
  
  />
</div>
        
      </div>
    );
  }
}

export default Theme;