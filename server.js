'use strict';

const express = require('express');

// Constants
const PORT = 8088;

// App
const app = express();
app.get('/', function (req, res) {
  res.send('Hello from World Sash and Fawad!!!!\n');
});

app.listen(PORT);
