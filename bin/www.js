
const http = require('http');
const app = require('../app'); // The express app we just created

//const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', ( process.env.PORT || 3000 ));

const server = http.createServer(app);
server.listen( app.get( 'port' ), function() {
  console.log( 'Node server is running on port ' + app.get( 'port' ));
  });
//server.listen(port);