'use strict';

const express = require('express');

// Constants
const PORT = 8088;

// App
const app = express();
app.get('/', function (req, res) {
  res.send('Hello from World Sash and Chris!\n');
});

app.listen(PORT);
