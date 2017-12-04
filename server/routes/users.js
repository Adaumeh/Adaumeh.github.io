
const users = require('../controllers/users');
const  express = require ('express');
//const authenticate require '../middlewares/authenticate';
let router = express.Router();

module.exports = {
  router.post('/api/v1/users/signup', users.create) =>{
       res.status(200).json({success:true});
       });
      }
