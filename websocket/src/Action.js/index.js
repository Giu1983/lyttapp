//action 
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'; 
export const SEND_MESSAGE = 'SEND_MESSAGE'; 

//function to receive message

export function receive(text){
    return{
        type: RECEIVE_MESSAGE,
        text
    }
}

//function to send message to the server
export function send(text){
    return{
        type: SEND_MESSAGE,
        text
    }
}

