const express = require('express');
const app = express();
const path = require('path');

// Setting
app.set('port', 3000);

// Middleware

// Routes
app.use(require('./routes/index'));

// Static
app.use(express.static(path.join(__dirname + 'public')));

module.exports = app;