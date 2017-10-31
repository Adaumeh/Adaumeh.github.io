
const getfavourite = require('../controllers/getfavourite');
const express = require('express');
//import authenticate from '../middlewares/authenticate';
let router = express.Router();

module.exports ={
  router.get('/api/v1/users/:userId/favbooks', getfavourite.list) =>{
       res.status(201).json({success:true});
       });
       }
