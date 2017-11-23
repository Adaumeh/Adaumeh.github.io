'use strict';
 
const chai = require('chai');  
const expect = require('chai').expect;
 const users = require('../server/controllers/users')

chai.use(require('chai-http'));
 
const app = require('../app.js'); // Our app
 
describe('API endpoint /signup', function() {  
  this.timeout(1000); // How long to wait for a response (ms)
 
  before(function() {
 
  });
 
  after(function() {
 
  });
 
  // POST - user details
  it('should return the user details', function(req,res) {
    return chai.request(app)
      .post('/api/v1/users/signup')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object');
        expect(res.body.results).to.be.an('array');
      });
  });
 
  // POST - Invalid path
  it('should return Not Found', function(req,res) {
    return chai.request(app)
      .post('/INVALID_PATH')
      .then(function(res) {
        throw new Error('Not Found');
      })
      .catch(function(err) {
        expect(err).to.have.status(404);
      });
  });
 
  // POST - Login
  it('should succesfully login user and generate a token for the user', function(req,res) {
    return chai.request(app)
      .post('/api/v1/users/signin')
      .send({
        email:'umeononihuadaobi@gmail.com' 
      })
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object');
        expect(res.body.results).to.be.an('array').that.includes(
          token);
      });
  });
 
  // POST - Bad Request
  it('should return Bad Request', function(req,res) {
    return chai.request(app)
      .post('/api/v1/users/signin')
  
      .send({
        username: 'ada'
      })
      .then(function(res) {
        throw new Error('Invalid content type!');
      })
      .catch(function(err) {
        expect(err).to.have.status(400);
      });
  });
});



