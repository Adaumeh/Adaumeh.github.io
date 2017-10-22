
const addbooks = require('../controllers/addbooks');
const getbooks = require('../controllers/getbooks');
const putbooks = require('../controllers/putbooks');
const borrow = require('../controllers/borrow');
//const returnbooks = require('../controllers/returnbooks');
const users = require('../controllers/users');
const favourite = require('../controllers/favourite');



module.exports = (app) => {
	
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the hellobooks API!',
  }));

  app.post('/api/books', addbooks.create);
  app.post('/api/users', users.create);
 
 app.get('/api/books', getbooks.list);
  app.put('/api/books/<bookId>', putbooks.update);
  app.post('/api/users/<userId>/borrow/<bookId>', borrow.create);
   //app.post('/api/users/<userId>/return/<bookId>', returnbooks.create);
   app.post('/api/users/<userId>/favourite/<bookId>',favourite.create);
};





