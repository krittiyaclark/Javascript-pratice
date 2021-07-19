"use strict";

var express = require('express');

var app = express();

var cors = require('cors');

var PORT = 8000;
app.use(cors());
var savage = {
  age: 28,
  BirthName: 'Shéyaa Bin Abraham-Joseph',
  birthLocaion: 'London, England'
}; // Set up to handle get request

app.get('/', function (request, response) {
  response.sendFile(__dirname + '/index.html');
});
app.get('/api/savage', function (request, response) {
  response.json(savage);
}); // Listening on port 8000

app.listen(PORT, function () {
  console.log("Server running on port ".concat(PORT));
});