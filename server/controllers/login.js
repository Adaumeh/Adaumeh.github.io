


// Method to sign in a user
const express = require('express');
const user = require('../models').users;
const login = require('../../app');
const bcrypt = require('bcrypt');
const app = express();
const saltRounds = 10;

const salt = bcrypt.genSaltSync(saltRounds);

const jwt = require("jsonwebtoken"); 

const secret = "drtguug8*werty+uifghyu"
const password = 's0/\/\P4$$w0rD';
const confirmpassword = 's0/\/\P4$$w0rD';
const hash = bcrypt.hashSync(password, saltRounds);

//const login = require('../controllers/user');
  module.exports = {
  findUser(req,res) {
   user.findOne({
      where: {
        email: req.body.email
      
      },
    })
    .then((user, err) => {
      if (err) throw err;
    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {
     if (user.username) {
       const payload = {
      admin: user.admin 
    };
        const token = jwt.sign(payload, app.get('secret'), {
          expiresInMinutes: 1440 // expires in 24 hours
        });

        // return the information including token as JSON
        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token
        });  
       }

     }
   })

  }
}
