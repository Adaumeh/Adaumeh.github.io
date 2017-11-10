
const login = require('../controllers/login');
const  express = require ('express');
//const authenticate require '../middlewares/authenticate';
let router = express.Router();

module.exports = {
  router.post('/api/v1/users/login', login.findUser) =>{
       res.status(200).json({success:true});
       });
      }
