
const users = require('../controllers/users');
const  express = require ('express');
//const authenticate require '../middlewares/authenticate';
let router = express.Router();

module.exports = {
  router.post('/api/users', users.create) =>{
       res.status(201).json({success:true});
       });
      }
