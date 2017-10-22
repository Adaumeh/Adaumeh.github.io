
const favourite = require('../controllers/favourite');
import express from 'express';
//import authenticate from '../middlewares/authenticate';
let router = express.Router();


  router.post('/api/users/<userId>/favourite/<bookId>', favourite.create) =>{
       res.status(201).json({success:true});
       });
       export default router;
