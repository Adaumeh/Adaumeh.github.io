


// Method to sign in a user
const express = require('express');
const user = require('../models').users;
const logout = require('../../app');
const bcrypt = require('bcrypt');
const app = express();
const saltRounds = 10;

const salt = bcrypt.genSaltSync(saltRounds);

const jwt = require("jsonwebtoken"); 

const secret = "drtguug8*werty+uifghyu"
const password = 's0/\/\P4$$w0rD';
const confirmpassword = 's0/\/\P4$$w0rD';
const hash = bcrypt.hashSync(password, saltRounds);
const session = require('express-session');

//const login = require('../controllers/user');
  module.exports = {
  deleteUser(req,res) {
 
const sess = session;

app.get('/',function(req,res){
sess = req.session;
//Session set when user Request our app via URL
if(sess.email) {
/*
* This line check Session existence.
* If it existed will do some action.
*/
    res.redirect('/api/v1/books');
}
else {
    res.redirect('/api/v1/users/signup');
}
});

app.post('/api/v1/users/login',function(req,res){
  sess = req.session;
//In this we are assigning email to sess.email variable.
//email comes from HTML page.
  sess.email=req.body.email;
  res.end('done');
});

app.get('/api/v1/books',function(req,res){
  sess = req.session;
if(sess.email) {
res.json('sess.email');
res.end('/api/v1/users/logout');
} else {
    res.json('Please login first');
    res.end('/api/v1/users/login');
}
});

app.get('/logout',function(req,res){
req.session.destroy(function(err) {
  if(err) {
    console.log(err);
  } else {
    res.redirect('/');
  }
});

});
}
