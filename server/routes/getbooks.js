
const getbooks = require('../controllers/getbooks');
import express from 'express';
//import authenticate from '../middlewares/authenticate';
let router = express.Router();


  router.get('/api/books', getbooks.list) =>{
       res.status(201).json({success:true});
       });
       export default router;
