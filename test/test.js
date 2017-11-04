process.env.NODE_ENV = 'test';

let sequelize = require("sequelize");
let Book = require('../server/models/books');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../bin/www');
let should = chai.should();
const assert = require('assert');
const expect = require('chai').expect;
chai.use(chaiHttp);
//Our parent block
describe('Books', () => {
    beforeEach((done) => { //Before each test we empty the database
        Book.remove({}, (err) => { 
           done();         
        });     
    });
/*
  * Test the /GET route
  */
  describe('/GET book', () => {
      it('it should GET all the books', (done) => {
        chai.request(server)
            .get('/book')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
              done();
            });
      });
  });

});



/*
const request =require('supertest');
//global.request = supertest(app);
//const expect = chai.expect;
const expect = require('expect');
const static = require('node-static');
//const createServer = require('server/server');
//const User from 'server/models/user'
//import request from 'supertest'
//import expect from 'expect'
const app = require('../app');
const createServer = require('../bin/www')
const books =require('../server/models/books');
const addbooks= require('../server/controllers/addbooks');
const getbooks =require('../server/controllers/getbooks');
const putbooks = require('../server/controllers/putbooks');
const constantList = require('./constants');

//const request =require('supertest');


describe('Controller Functions', () => {
    describe('Book Controller:', () =>{
        beforeEach(() => {
            // runs before each test in this block
           // models.books = {};
           // models.reviews = {};
            //models.favorites = {};
            //models.borrowedBooks = {};
            //models.users ={};
          });
        
        it('should return specific error message when parameters are missing',(done) => {
           // const bookData = {};
           // const fields = ['title', 'isbn', 'author', 'quantity', 'publishedYear'];
                request(createServer())
                books.post('/api/v1/books')
                .send(books)
                .set('Accept', 'application/json')
                .expect(400)
                .end((err, res) => {
                    expect(res.body.error).to.have.lengthOf(5);
                   
                    done(err);
                });
          })
      })
})
        
*/