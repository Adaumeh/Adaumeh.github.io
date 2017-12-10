const chai = require('chai');
const request = require('supertest');
const chaiHttp = require('chai-http');
const app = require('../app');
const should = require('should');
const {users} = require('../server/models/users');
const server = require('../bin/www');
const expect = require('expect');
const {books} = require('../server/models/books')


chai.use(chaiHttp);  


describe('User controller', function() {
  beforeEach((done) => {
  request(app).delete('/api/v1/users');
  done();
});
 it('should insert the user details into the database', function(done) {
  chai.request(app)
    .post('/api/v1/users/signup')
    .send({
        username: 'Adaeze',
        password: 'test',
        email: 'adaobi@gmail.com',
        role: 'user'
    })
    .end(function(err, res){
      expect(200);
      expect('json');
      expect('array');
      expect('username:Adaeze')
      expect('password:test')
      done();

    });
 });

 it('should return error when saving a duplicate email', function(done) {
  chai.request(app)
    .post('/api/v1/users/signup')
    .send({
        username: 'Adaeze',
        password: 'test',
        email: 'adaobi@gmail.com',
        role: 'user'
    })
    .end(function(err, res){
      expect(400)
      expect('json');
      expect('array');
      done();
    });
});

 it('should throw error when parameters are missing', function(done) {
  chai.request(app)
    .post('/api/v1/users/signup')
    .send({
        username: 'Adaeze',
        role: 'user'
    })
    .end(function(err, res){
      expect(400)
      expect('json');
      expect('array');
      done();
    });
});
});
describe('User controller', function() {
  beforeEach((done) => {
  request(app).delete('/api/v1/users');
  done();
});
 
  it('should throw error when parameters are missing', function(done) {
  chai.request(app)
    .post('/api/v1/users/signin')
    .send({
    })
    .end(function(err, res){
      expect(400)
      expect('json');
      expect('array');
      done();
    });
})
  it('should throw error when email does not exist', function(done) {
  chai.request(app)
    .post('/api/v1/users/signin')
    .send({
        email: 'ad@gmail.com'
    })
    .end(function(err, res){
      expect(400)
      expect('json');
      expect('array');
      done();
    });
})
  it('should insert the user signin details into the database', function(done) {
  chai.request(app)
    .post('/api/v1/users/signin')
    .send({
        email: 'adaobi@gmail.com'
    })
    .end(function(err, res){
      expect(200);
      expect('json');
      expect('array');
      expect('email:adaobi@gmail.com')
      expect('token:token')
      done();

    })
 });
});
  describe('Book controller', function() {
  beforeEach((done) => {
  request(app).delete('/api/v1/books');
  done();
});
 it('should insert the book details into the database', function(done) {
  chai.request(app)
    .post('/api/v1/books')
    .send({
        title: 'The Innocent ',
        author: 'John Greshawn',
        category: 'fiction',
        year: '2003',
        isbn:'cd209vc',
        registeredby:'Ify',
        status:'borrowed',
        quantity:7,
        bookId: 8,
        token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjozLCJ1c2VybmFtZSI6ImFkYW9iaSIsInBhc3N3b3JkIjoiJDJhJDEwJEsxVDdZZlFmQmRpcmgwaFE5SkFIbC5ySHpSZDBwSVFBWGI3RUI3cmtaNEFnLjhZOTVRL2d5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIiwiZW1haWwiOiJ1bWVvbm9uaWh1YWRhb2JpQGdtYWlsLmNvbSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiLCJyb2xlIjoidXNlciIsImNyZWF0ZWRBdCI6IjIwMTctMTEtMjlUMDg6MDk6MjIuODA3WiIsInVwZGF0ZWRBdCI6IjIwMTctMTEtMjlUMDg6MDk6MjIuODA3WiJ9LCJpYXQiOjE1MTIyMTgyMDEsImV4cCI6MTUxMjIyNjg0MX0.-151L8Df3Du8vf3y8QDNhhkzJYCOM1VI3hWla4i2alk'
     })  
    .end(function(err, res){
      expect(200);
      expect('json');
      expect('array');
      expect('title:Lord of the flies')
      expect('status:borrowed')
      done();

    });
 });
  it('should return 400 bad request error when a parameter is missing', function(done) {
  chai.request(app)
    .post('/api/v1/books')
    .send({
        title: 'Lord of the flies',
        category: 'fiction',
        year: '2003',
        isbn:'cd24356',
        registeredby:'Ify',
        status:'borrowed',
        quantity:12,
       token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjozLCJ1c2VybmFtZSI6ImFkYW9iaSIsInBhc3N3b3JkIjoiJDJhJDEwJEsxVDdZZlFmQmRpcmgwaFE5SkFIbC5ySHpSZDBwSVFBWGI3RUI3cmtaNEFnLjhZOTVRL2d5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIiwiZW1haWwiOiJ1bWVvbm9uaWh1YWRhb2JpQGdtYWlsLmNvbSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiLCJyb2xlIjoidXNlciIsImNyZWF0ZWRBdCI6IjIwMTctMTEtMjlUMDg6MDk6MjIuODA3WiIsInVwZGF0ZWRBdCI6IjIwMTctMTEtMjlUMDg6MDk6MjIuODA3WiJ9LCJpYXQiOjE1MTIyMTgyMDEsImV4cCI6MTUxMjIyNjg0MX0.-151L8Df3Du8vf3y8QDNhhkzJYCOM1VI3hWla4i2alk'
      
    })
    .end(function(err, res){
      expect(400);
      //expect('json');
      //expect('array');
     // expect('year:2003')
      //expect('title:Lord of the flies')
      done();

    });
 });
it('should return 403 unauthorized error when a token is missing', function(done) {
  chai.request(app)
    .post('/api/v1/books')
    .send({
         title: 'Lord of the flies',
        author: 'J.K Tolken',
        category: 'fiction',
        year: '2003',
        isbn:'cd24356',
        registeredby:'Ify',
        status:'borrowed',
        quantity:12,
        bookId: 1
       //token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjozLCJ1c2VybmFtZSI6ImFkYW9iaSIsInBhc3N3b3JkIjoiJDJhJDEwJEsxVDdZZlFmQmRpcmgwaFE5SkFIbC5ySHpSZDBwSVFBWGI3RUI3cmtaNEFnLjhZOTVRL2d5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIiwiZW1haWwiOiJ1bWVvbm9uaWh1YWRhb2JpQGdtYWlsLmNvbSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiLCJyb2xlIjoidXNlciIsImNyZWF0ZWRBdCI6IjIwMTctMTEtMjlUMDg6MDk6MjIuODA3WiIsInVwZGF0ZWRBdCI6IjIwMTctMTEtMjlUMDg6MDk6MjIuODA3WiJ9LCJpYXQiOjE1MTIyMTc0MDcsImV4cCI6MTUxMjIyNjA0N30.ZsGPdrQ4NN3mJCLbSDgBSHkRFD8uUVhG4aFaUAWL3BE'
   
      
    })
    .end(function(err, res){
      expect(403);
      expect({message:'no token provided'});
      //expect('array');
     // expect('year:2003')
      //expect('title:Lord of the flies')
      done();

    });
 });
it('should return 200 ok when a get request is  made ', function(done) {
  chai.request(app)
    .get('/api/v1/books')
    .send({  
       Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjozLCJ1c2VybmFtZSI6ImFkYW9iaSIsInBhc3N3b3JkIjoiJDJhJDEwJEsxVDdZZlFmQmRpcmgwaFE5SkFIbC5ySHpSZDBwSVFBWGI3RUI3cmtaNEFnLjhZOTVRL2d5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIiwiZW1haWwiOiJ1bWVvbm9uaWh1YWRhb2JpQGdtYWlsLmNvbSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiLCJyb2xlIjoidXNlciIsImNyZWF0ZWRBdCI6IjIwMTctMTEtMjlUMDg6MDk6MjIuODA3WiIsInVwZGF0ZWRBdCI6IjIwMTctMTEtMjlUMDg6MDk6MjIuODA3WiJ9LCJpYXQiOjE1MTIyMTgyMDEsImV4cCI6MTUxMjIyNjg0MX0.-151L8Df3Du8vf3y8QDNhhkzJYCOM1VI3hWla4i2alk'  
    })
    //.end(function(err, res){
      
      //.expect('json');
      //expect('array');
     // expect('year:2003')
      //expect('title:Lord of the flies')
    .end(function(err, res){
      expect(200);
    //if (err) return done(err);
    // console.log(err, res);
      done();

    //});
 });
it('should return error when saving a duplicate book details', function(done) {
  chai.request(app)
    .post('/api/v1/books')
    .send({
        title: 'Lord o',
        author: 'J.K Tolken',
        category: 'fiction',
        year: '2003',
        isbn:'cd24356676',
        registeredby:'Ify',
        status:'borrowed',
        quantity:12,
        bookId: 2,
        token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjozLCJ1c2VybmFtZSI6ImFkYW9iaSIsInBhc3N3b3JkIjoiJDJhJDEwJEsxVDdZZlFmQmRpcmgwaFE5SkFIbC5ySHpSZDBwSVFBWGI3RUI3cmtaNEFnLjhZOTVRL2d5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIiwiZW1haWwiOiJ1bWVvbm9uaWh1YWRhb2JpQGdtYWlsLmNvbSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiLCJyb2xlIjoidXNlciIsImNyZWF0ZWRBdCI6IjIwMTctMTEtMjlUMDg6MDk6MjIuODA3WiIsInVwZGF0ZWRBdCI6IjIwMTctMTEtMjlUMDg6MDk6MjIuODA3WiJ9LCJpYXQiOjE1MTIyMTgyMDEsImV4cCI6MTUxMjIyNjg0MX0.-151L8Df3Du8vf3y8QDNhhkzJYCOM1VI3hWla4i2alk'
    })
    .end(function(err, res){
      expect(400)
      //expect('json');
      //expect('array');
      done();
    });
});
it('should return error code when an invalid token is provided', function(done) {
  chai.request(app)
    .post('/api/v1/books')
    .send({
        title: 'Lord o',
        author: 'J.K Tolken',
        category: 'fiction',
        year: '2003',
        isbn:'cd24356676',
        registeredby:'Ify',
        status:'borrowed',
        quantity:12,
        bookId: 2,
        token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjozLCJ1c2VybmFtZSI6ImFkYW9iaSIsInBhc3N3b3JkIjoiJDJhJDEwJEsxVDdZZlFmQmRpcmgwaFE5SkFIbC5ySHpSZDBwSVFBWGI3RUI3cmtaNEFnLjhZOTVRL2d5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIiwiZW1haWwiOiJ1bWVvbm9uaWh1YWRhb2JpQGdtYWlsLmNvbSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiLCJyb2xlIjoidXNlciIsImNyZWF0ZWRBdCI6IjIwMTctMTEtMjlUMDg6MDk6MjIuODA3WiIsInVwZGF0ZWRBdCI6IjIwMTctMTEtMjlUMDg6MDk6MjIuODA3WiJ9LCJpYXQiOjE1MTIyMTgyMDEsImV4cCI6MTUxMjIyNjg0MX0.-151L8Df3Du8vf3y8QDNhhkzJYCOM1VI3hWla4i2alk'
    })
    .end(function(err, res){
      expect(400)
      expect({message:'failed to authenticate token'});
      //expect('array');
      done();
    });
});
});
});



