import React, {Component} from 'react';
import Chat from './Components/Chat'; 

import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux'; 

import * as Action from './Action.js/index';

function mapStateToProps(state) {
   return{
     message: state.message.messages
   }; 
}

function mapDispatchToProps(dispatch){
   return{
     actions: bindActionCreators(ChatActions, dispatch)
   }; 
}
class App extends Component {
 render(){
    return (
      <div className="App">
      <Chat {...this.props } />
      </div>
    )
  } 
  
  
  
}

//I connect the component in the store
export default connect(mapStateToProps, mapDispatchToProps)(App);
