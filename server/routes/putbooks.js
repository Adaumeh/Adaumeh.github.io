
const putbooks = require('../controllers/putbooks');
const express = require ('express');
//import authenticate from '../middlewares/authenticate';
let router = express.Router();

module.exports = {
  
  router.put('/api/books/:bookId', putbooks.update) =>{
       res.status(201).json({success:true});
  
       });

     }
