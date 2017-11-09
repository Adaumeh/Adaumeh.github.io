const express = require('express');
const logger = require('morgan');
const jwt = require('jsonwebtoken');
const secret= "drtguug8*werty+uifghyu"

const bodyParser = require('body-parser');

const bcrypt = require('bcrypt');
// Set up the express app
const app = express();
// Log requests to the console.

app.set('superSecret', secret)
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Setup a default catch-all route that sends back a welcome message in JSON format.
require('./server/routes')(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));
module.exports = app;
