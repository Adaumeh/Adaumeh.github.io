/*process.env.NODE_ENV = 'test';
//let sequelize = require("sequelize")
let supertest = require("supertest");
let Books = require('../server/models/books');
let addbooks = require('../server/controllers/addbooks')
let getbooks = require('../server/controllers/getbooks')
let chai = require('chai');
let chaiHttp = require('chai-http');
//let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

// This agent refers to PORT where program is runninng.

let server = supertest.agent("http://localhost:8000");
let sequelize = require("sequelize");
//let Books = require('../server/models/books');


describe('GET Books',function(){

  // #1 should return home page

  it("should return books",function(done){

    // calling home page api
    server
    .get('/api/v1/books')
    .expect(200)
        .end((err, response) => {
          if (err) {
            return done(err)
          }
          expect(response.body).toEqual()
          return done()
        })  });

});

