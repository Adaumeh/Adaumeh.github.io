  const expect = require('chai').expect;
  const chai = require('chai-http');
 const should = require('should'); 
 const  assert = require('assert');
 const app = require('../app.js');
 const request = require('supertest');  
 const sequelize = require('sequelize');
//var winston = require('winston');
//const users = require('../server/controllers/users');
const users = require('../server/models/users');
const config = require('../server/config/config.json');


  // within before() you can run all the operations that are needed to setup your tests. In this case
  // I want to create a connection with the database, and when I'm done, I call done().
 
  // use describe to give a title to your test suite, in this case the tile is "Account"
  // and then specify a function in which we are going to declare all the tests
  // we want to run. Each test starts with the function it() and as a first argument 
  // we have to provide a meaningful title for it, whereas as the second argument we
  // specify a function that takes a single parameter, "done", that we will use 
  // to specify when our test is completed, and that's what makes easy
  // to perform async test!
  describe('Api api/v1/users/signup', function() {
     before(function(done) {
    // In our tests we use the test db                            
    done();
  });
    it('should return error trying to save duplicate username', function(done) {
      const profile = {
        username: 'ada',
        password: 'test',
        email: 'umeononihuadaobi@gmail.com',
        role: 'user'
      };
    // once we have specified the info we want to send to the server via POST verb,
    // we need to actually perform the action on the resource, in this case we want to 
    // POST on /api/profiles and we want to send some info
    // We do this using the request object, requiring supertest!
    request(app)
    .post('/api/v1/users/signup')
    .send(profile)
    // end handles the response
    .end(function(err, res) {
          if (err) {
            throw err;
          }
          // this is should.js syntax, very clear
           expect(200);
          done(err);
        });
    });
    it('should correctly return user details', function(done){
    const body = {
       username: 'Adaeze',
        password: 'test',
        email: 'adaobi@gmail.com',
        role: 'user'
    };
    request(app)
        .post('/api/v1/users/signup')
        .send(body)
        .expect(200) //Status code
        .end(function(err,res) {
            if (err) {
                throw err;
            }
            // Should.js fluent syntax applied
        expect(err).to.have.status(404);
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object');
        expect(res.body.results).to.be.an('array');
        expect(res.body.results).to.have.property('_id');
        expect(res.body.username).to.be.equal('Adaeze');
        expect(res.body.password).to.be.equal('test'); 
        expect(res.body.email).to.be.equal('adaobi@gmail.com'); 
        expect(res.body.role).to.be.equal('user');                    
            done(err);
        });
    });
  });
/*const expect = require('chai').expect;
 //const users = require('../server/models/users');
const sequelize = require('sequelize');
chai.use(require('chai-http'));
const app = require('../app.js'); // Our app
 //const should = require('should-promised');


describe('API endpoint api/v1/users/signup', function(done){  
  this.timeout(50000); // How long to wait for a response (ms)
 //let timeout = null;
  before(function(done) {
   const  users = require('../server/models/users');
  
   done()
  });
 
  after(function(done) {
    done();
  
 
 return new Promise((resolve, reject) => {
    
  }) 
   });

 
  // POST - user details
  it('should return the user details', function(done){
     return new Promise((resolve, reject) => {
  })
    return chai.request(app)

      .post('/api/v1/users/signup')
      .send({
          username: 'name',
          password: 'password',
          email:'ada@yahoo.com',
          role:'user'
         
        })
      .then(function(res) {
        setTimeout(function() {
          throw new Error('Not found');
      })
      .catch(function(err) {
        expect(err).to.have.status(404);
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object');
        expect(res.body.results).to.be.an('array');
        done();
});
      });
  });
 
  // POST - Invalid path
  it('should return Not Found', function(done) {
     return new Promise((resolve, reject) => {
  })
    return chai.request(app)
      .post('/api/v1/INVALID_PATH')
      .then(function(res) {
        setTimeout(function() {
        throw new Error('Not found');
      })
      .catch(function(err) {
        expect(err).to.have.status(404);
        done();
      
      });
  });
 
  // POST - Login
  
 
  // POST - Bad Request
  it('should return Bad Request',function(done) {
     return new Promise((resolve, reject) => {
  })
    return chai.request(app)
      .post('/api/v1/users/signup')
  
      .send({
        phone: 080654328
      })
      .then(function(res) {
        setTimeout(function() {
        throw new Error('sequelize database errror fields cannot be null');
      })
      .catch(function(err) {
        expect(err).to.have.status(400); 
        done();
      });
      });
  });
});
describe('API endpoint  /api/v1/users/signin', function(done)  {  
  this.timeout(50000) ; // How long to wait for a response (ms)
 
  before(function(done) {
    const users = require('../server/models/users');
 
  });
 
  after(function(done) {
    done();
 
  });

  it('should return Not found ',function(done)  {
     return new Promise((resolve, reject) => {

  })
    return chai.request(app)
      .post('/api/v1/users/signin')
  
      .send({
        password: 'haser'
      })
      .then(function(res) {
        setTimeout(function() {
        throw new Error('Invalid content type!');
      })
      .catch(function(err) {
        expect(err).to.have.status(404);
        done();
      });
      });

  });
});
  it('should successfully login the user and return a token', function(done){
     return new Promise((resolve, reject) => {
  })
    return chai.request(app)
      .post('/api/v1/users/signin')
      .send({
        email:'umeononihuadaobi@gmail.com' 
      })
      .then(function(res) {
        setTimeout(function() {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object');
        expect(res.body.results).to.be.an('array').that.includes(
          token);
        done();
      });
      });
      });
  });*/


