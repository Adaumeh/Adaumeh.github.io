


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
  deleteUser(req,res) {
    req.session.destroy();
  res.send("logout success!");
   
}
}
