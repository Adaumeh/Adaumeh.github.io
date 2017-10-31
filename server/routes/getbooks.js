
const getbooks = require('../controllers/getbooks');
const express = require('express');
//import authenticate from '../middlewares/authenticate';
let router = express.Router();

module.exports ={
  router.get('/api/v1/books', getbooks.list) =>{
       res.status(201).json({success:true});
       });
       }
