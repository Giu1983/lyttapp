import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

class Chat extends Component {
    constructor(props){
        super(props); 

        this.handleFormSubmit = this.handleFormSubmit.bind(this); 
    }
    
    handleFormSubmit(e){
        e.preventDefault(); 
        let text = this.refs.messageText.nodeValue; 
        this.props.actions.send(text);
    }
    render(){
       //function to get the data-message
        let i = 0,                      
          messagges = this.props.messagges.map(message => {
              return<li className="list-group-item" key={i++}>{message}</li>
          })

        return(
            <div className="container">
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-group">
                    <div className="input-group">
                        <input type="text" ref="messageText" className="form-container" placeholder="Type here">
                            <span className="input-group-btn">
                                <button type="submit" className="btn-btn-primary">Send</button>
                            </span>
                        </input>
                    </div>
                </div>
            </form>
             <ul className="list-group">{messagges}</ul>
            </div>
        )
    }
}
Chat.propTypes = {
 actions: PropTypes.object,
 messages: PropTypes.array
};

export default Chat; 