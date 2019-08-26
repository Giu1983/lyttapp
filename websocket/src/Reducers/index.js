import { RECEIVE_MESSAGE, SEND_MESSAGE } from '../Action.js/index';

const getState = {
    messages: [],
    action: undefined
}; 

//function to store data
function message(state = initialState, action) {
    switch(action.type){
        case RECEIVE_MESSAGE: 
         return{
             ...state, 
             messages: [...state.messages, action.text],
             action: action
         }
         case SEND_MESSAGE:
          return {
              ...state, 
              action: action
          }
          default: 
           return state; 
    }
}