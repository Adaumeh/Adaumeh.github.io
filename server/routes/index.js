
const addbooks = require('../controllers/addbooks');
const getbooks = require('../controllers/getbooks');
const putbooks = require('../controllers/putbooks');
const borrow = require('../controllers/borrow');
const returnbooks = require('../controllers/returnbooks');
const users = require('../controllers/users');
const favourite = require('../controllers/favourite');
const getfavourite= require('../controllers/getfavourite')
const reviews = require('../controllers/reviews');
const acceptborrow = require('../controllers/acceptborrow');
const acceptreturn = require('../controllers/acceptreturn');


module.exports = (app) => {
	
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the hellobooks API!',
  }));

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
   app.post('/api/v1/users', users.create);
};





