
const borrow = require('../controllers/borrow');
const  express = require ('express');
//const authenticate require '../middlewares/authenticate';
let router = express.Router();

module.exports = {
  router.post('/api/users/<userId>/borrow/<bookId>', borrow.create) =>{
       res.status(201).json({success:true});
       });
      }
