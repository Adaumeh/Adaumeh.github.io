
const putbooks = require('../controllers/putbooks');
import express from 'express';
//import authenticate from '../middlewares/authenticate';
let router = express.Router();

module.exports = {
  
  router.put('/api/books/<bookId>', putbooks.update) =>{
       res.status(200).json({success:true});
       });
     }
