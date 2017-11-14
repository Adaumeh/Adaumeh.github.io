
const express = require('express');
const app = express();
// Method to sign in a user
const user = require('../models').users;
const login = require('../../app');
const bcrypt = require('bcrypt');

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

      // check if password matches
       if (user.comparePassword(req.body.password)){
        res.json({ success: false, message: 'wrong password.' });
      } else {
        return res.json({token:jwt.sign({email:user.email,username:user.username,'RESTFULAPIs'})});

  }

   }
});

}


        // if user is found and password is right
        // create a token with only our given payload
    // we don't want to pass in the entire user since that has the password
 /*   const payload = {
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

  });
}
  }
*/