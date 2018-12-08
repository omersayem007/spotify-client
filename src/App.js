import React, { Component } from 'react';
import DashBoard from './components/parent/DashBoard';
const queryString = require('query-string');

class App extends Component {

  constructor(props){
    super(props);

    this.state={
       queryString:''
    }

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
        <div>
        
         <DashBoard/>
          
        </div>
      );

    }
    else{
      return(

        <div>
        <button onClick={()=> window.location='http://localhost:8888/login'}>Sign In with Spotify</button>
        </div>
        
      )
    }

    
  }
}

export default App;