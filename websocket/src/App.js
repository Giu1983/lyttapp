import React, {Component} from 'react';
import Chat from './Components/Chat'; 
import SockJS from 'sockjs-client'; 

class App extends Component {
  constructor(props){
    super(props); 
  
  //function to create a socket connection
  var sock = new SockJS("https://mydomain.com/my_prefix")
  
  sock.onopen = function(){
    console.log('connection open'); 
      }; 

   let self = this;

  sock.onmessage = function(e) {
    console.log('message received', e.data);
    //message from server
    self.setState({ messagges: [...self.state.messages, e.data]}); 
};
  
  sock.onclose = () =>{
    console.log('close'); 
  };

   this.state = {
     actions: sock,
     message: []
   }

  }
  render(){
    return (
      <div className="App">
      <Chat {...this.state } />
      </div>
    )
  } 
  
  
  
}


export default App;
