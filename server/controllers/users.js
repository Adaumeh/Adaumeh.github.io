const usercontroller = require('../models').users;
const express = require('express');

//const bcrypt = require('bcrypt');

//const saltRounds = 10;

//const salt = bcrypt.genSaltSync(saltRounds);

//const jwt = require("jsonwebtoken"); 

//const secret = "drtguug8*werty+uifghyu"
//const password = 's0/\/\P4$$w0rD';
//const hash = bcrypt.hashSync(password, saltRounds);

let router = express.Router();
//const books = require('../models').books;

module.exports = {
  create(req, res) {
    if(!req.body.username ){
        res.json({message:"enter username"})
      }
      else if (!req.body.email ){
        res.json({message:"enter your email"})
      }
      else if (!req.body.password){
        res.json({message:"enter password"})
      }
      else if (!req.body.role){
        res.json({message:"enter role"})
      }
      
      else
      { 
    return usercontroller
      .create({
        username: req.body.username,
        //password: bcrypt.hashSync(req.body.password,salt),
        password:req.body.password,
        email: req.body.email,
        role: req.body.role
      })
      
      .then(usercontroller=> res.status(200).send(usercontroller))
      .catch(error => res.status(400).send(error));
    }
}
  };

