import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'; 
import { createStore, combineReducers } from 'redux'; 

import reducers from './Reducers'; 
import * as actions from './Action.js'

const reducer = combineReducers(reducers);

const store = createStore(
    reducer
);


ReactDOM.render(
 <Provider store={store}>
     <App />
 </Provider>,
     document.getElementById('root'));
     registerServiceWorker();

     //socket connection
     const sock = new SockJS('https://mydomain.com/my_prefix')
     sock.onopen = () =>{
         console.log('connection open');
     };
     sock.onmessage = e =>{
         console.log('message received:', e.data);
         //we use dispatch for the message received
         //the reducer have the action "receive"
         return store.dispatch(actions.receive(e.data));
     };

     sock.onclose = () => {
         console.log('close');
     };
     //Called any time any action is dispatched
     store.subscribe(()=>{
         const { message } = store.getState(); 

         switch(message.action.type) {
             case actions.SEND_MESSAGE: 
              return sock.send(message.action.text);

              default:
               return; 
         }
     })