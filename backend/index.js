var app = require('express')();                 //with this code we initialize the real chat app to be a function handler that it's possible to supply to an HTTP server
var http = require('http').Server(app);  
var io = require('socket.io')(http); 
var port = process.env.PORT || 3000;
var request = require("request")
var url = ""; 
events = require('events'),
 serverEmitter = new events.EventEmitter();

app.get('/', function(req, res){
    res.send(<p>"Hi, I would like to talk to you"</p>)    //it has been defined a route handler that gets called when user hit the website home
}); 

io.on('connection', function(socket){  
    
    setInterval(
        function(){

            request({
                url: url, 
                json: true
               }, function (error, response, body){

                if(!error && response.statusCode === 200){
                    io.emit('chat message', body); 
                }
               });
        }, 5000);  
    });
                                 //this is a new instance of socket.io initialized by passing the http (HTTP server) object.

http.listen(3000, function(){              //I listen on the connection event and log it to the console.
    console.log('listening on *:3000'); 
}); 