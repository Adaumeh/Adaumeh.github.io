
const reviews = require('../controllers/reviews');
import express from 'express';
//import authenticate from '../middlewares/authenticate';
let router = express.Router();


  router.post('/api/users/:userId/review/:bookId', reviews.create) =>{
       res.status(201).json({success:true});
       });
       export default router;
