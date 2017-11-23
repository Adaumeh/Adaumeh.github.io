const  express = require('express');
const readinglist = require('../controllers/readinglist');
//import authenticate from '../middlewares/authenticate';
let router = express.Router();


  router.post('/api/v1/users/readinglist', readinglist.create) =>{
       res.status(201).json({success:true});
       });
       export default router; 
        