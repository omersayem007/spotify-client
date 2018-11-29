import React, { Component } from 'react';
import TrackList from './TrackList';
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
        return (
            <div className="App">
            
              <input type="text" value={this.state.artist} onChange={this.handleArtistChange}/>
              <button onClick={this.fetchData}>Search</button>
              
              <TrackList
              
                tracks={this.state.tracks}
              />
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
