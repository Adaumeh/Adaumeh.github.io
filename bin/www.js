
const http = require('http');
const app = require('../app');
//const server = require('../app')

const port = +process.env.PORT || 8000;
app.set('port', port);

http.createServer(app).listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});
//module.exports = server