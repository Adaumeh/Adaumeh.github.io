// This will be our application entry. We'll setup our server here.
const express = require('express');
const http = require('http');
const app = express(); // The express app we just created
const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);