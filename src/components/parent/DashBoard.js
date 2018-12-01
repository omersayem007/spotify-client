import React, { Component } from 'react';
import TrackList from './TrackList';
import '../../style/CardStyle.css';
import '../main/Theme.css';
const queryString = require('query-string');


class DashBoard extends Component {

  constructor(props){
      super(props);

      this.state={
         tracks:[],
         artist:'',
         queryString:''
      }

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
    
  } else {
    searchBox.className = 'show';
    searchLink.className = 'active';
    searchInput.focus();
  }
}, searchEnter = (event) => {
    if (event.key == 'Enter') {
      searchToggle();
      this.fetchData();
    }
};

searchLink.addEventListener('click', searchToggle);
searchClose.addEventListener('click', searchToggle);
searchInput.addEventListener('keyup', searchEnter);

  }

  handleArtistChange=(e)=>{

    this.setState({artist:e.target.value});
  }

  fetchData=()=>{

    const parsed = queryString.parse(window.location.search);
    const accessToken=parsed.access_token;

    const BASE_URL = "https://api.spotify.com/v1/search?";
    const artist =this.state.artist || 'Linkin Park';
    let FETCH_URL = `${BASE_URL}q=${artist}&type=track`;
    
    fetch(FETCH_URL, {
        headers: {'Authorization': 'Bearer ' + accessToken}
      }).then(response => response.json())
      .then((data) => this.setState({ tracks:data.tracks.items}));

      console.log(this.state.tracks)

  }

  checkAcces=()=>{
    const parsed = queryString.parse(window.location.search);
    const accessToken=parsed.access_token;

    if(accessToken){
        return true;
    }else{
        return false;
    }
  }

  render() {

  

    if(this.checkAcces()){

        const music=  this.state.tracks.map((track)=>(
            <div className="box">
            <TrackList
            tracks={this.state.tracks}
            
            />
            
            </div>
        ));

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
  <input id="search-input" type="text" value={this.state.artist} placeholder="Search..." onChange={this.handleArtistChange}/>
</div>
<div class="content">
{music}

  
</div>

                        {/* <input type="text" value={this.state.artist} onChange={this.handleArtistChange}/>
                        <button onClick={this.fetchData}>Search</button> */}

 </div>
               
          );
    }else{

        return(
            <div>
                <button onClick={()=> window.location='http://localhost:8888/login'}>Sign In with Spotify</button>
            </div>
            
        );
        
    }

       
  
    
  }
}

export default DashBoard;
