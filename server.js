'use strict';

var app = require('express')(),
    server = require('http').Server(app),
    io = require('socket.io')(server);

const PORT = 8088;

var connections = [], locations = [];

server.listen(PORT);

app.get('/', function (req, res) {
  res.send('Hey!');
});

app.post('/location', function (req, res) {
  addLocation(req.body.lon, req.body.lat);
});

io.on('connection', function (socket) {
  connectons.push(socket);
  
  console.log('Connection added:');
  console.log(socket);

  socket.on('disconnect', function() {
    removeConnection(socket);
  })
});

function removeConnection(socket) {
  var idx = connections.indexOf(socket);
  if(idx > -1)
    connections.splice(idx, 1);
}

function addLocation(lon, lat) {

  if(lon && lat) {
    var loc = { lon: lon, lat: lat }
    locations.push(loc);

    connections.forEach(function(socket) {
      socket.emit('location.update', loc)
    })

  }
}