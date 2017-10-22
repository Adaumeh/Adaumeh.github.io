
const addbooks = require('../controllers/addbooks');
const  express = require ('express');
//const authenticate require '../middlewares/authenticate';
let router = express.Router();

module.exports = {
  router.post('/api/books', addbooks.create) =>{
       res.status(201).json({success:true});
       });
      }
