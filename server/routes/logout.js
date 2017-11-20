const session = require('express-session')
const logout = require('../controllers/logout');
const  express = require ('express');
//const authenticate require '../middlewares/authenticate';
let router = express.Router();

module.exports = {
 



router.get('/api/users/logout', logout.deleteUser =>{
   res.status(200).json({success:true});
       });
}