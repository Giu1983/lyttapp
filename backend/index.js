var app = require('express')();                 //with this code we initialize the real chat app to be a function handler that it's possible to supply to an HTTP server
var http = require('http').createServer(app);  
var io = require('socket.io')(http); 

app.get('/', function(req, res){
    res.send(<p>"Hi, I would like to talk to you"</p>)    //it has been defined a route handler that gets called when user hit the website home
}); 

io.on('connection', function(socket){     //this is a new instance of socket.io initialized by passing the http (HTTP server) object.
    console.log('an user connected');
})

http.listen(3000, function(){              //I listen on the connection event and log it to the console.
    console.log('listening on *:3000'); 
}); 