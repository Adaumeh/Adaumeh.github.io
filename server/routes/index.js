
const addbooks = require('../controllers/addbooks');
const getbooks = require('../controllers/getbooks');
const putbooks = require('../controllers/putbooks');
const borrow = require('../controllers/borrow');
const returnbooks = require('../controllers/returnbooks');
const users = require('../controllers/users');
const login = require('../controllers/login');
const logout = require('../controllers/logout');
const favourite = require('../controllers/favourite');
const getfavourite= require('../controllers/getfavourite')
const reviews = require('../controllers/reviews');
const acceptborrow = require('../controllers/acceptborrow');
const acceptreturn = require('../controllers/acceptreturn');
const jwt = require("jsonwebtoken"); 
const secret = "drtguug8*werty+uifghyu";
const session = require('express-session');




module.exports = (app) => {
	
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the hellobooks API!',
  }));
  app.post('/api/v1/users/signup', users.create);
  app.post('/api/v1/users/signin', login.findUser);
  app.get('/api/users/logout', logout.deleteUser );

  app.use(function(req, res, next) {
   //const authorizationHeader = req.headers['Authorization'];
   const token = req.body.token || req.params.token || req.headers['authorization'];
  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, 'secret', function(err, decoded) {      
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });    
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;   
        next();
      }
    });

  } else {
    return res.status(403).send({ 
        success: false, 
        message: 'No token provided.' 
    });

  }
})
  
  app.post('/api/v1/books', addbooks.create);
  app.put('/api/v1/books/:bookId', putbooks.update);
  
 
 app.get('/api/v1/books', getbooks.list);
 
  app.post('/api/v1/users/:userId/borrow/:bookId', borrow.create);
   app.post('/api/v1/users/:userId/return/:bookId', returnbooks.create);
   app.post('/api/v1/users/:userId/fav/:bookId',favourite.create);
   app.get('/api/v1/users/:userId/favbooks',getfavourite.list);
   app.post('/api/v1/users/:userId/review/:bookId', reviews.create);
   app.put('/api/v1/users/:userId/borrow/:bookId', acceptborrow.create);
   app.put('/api/v1/users/:userId/return/:bookId', acceptreturn.create);

 }



