
const request =require('supertest');
const expect = require('expect');
const static = require('node-static');
//const createServer = require('server/server');
//const User from 'server/models/user'
//import request from 'supertest'
//import expect from 'expect'
const app = require('../app');
const server = require('../bin/www')
const books =require('../server/models/books');
const addbooks= require('../server/controllers/addbooks');
const getbooks =require('../server/controllers/getbooks');
const putbooks = require('../server/controllers/putbooks');
const constantList = require('./constants')



describe('UserController', () => {
  describe('POST /api/books', () => {
    it('should return 401 Unauthorized when a user has not logged in', (done) => {
      request(createServer())
        .POST('/api/books')
        .expect(401, done)
    })



    it('should return 400 Bad Request when parameters are missing', (done) => {
      serverInstance
        .post('/api/books')
        .expect(400, done)
    })

    it('should return 400 Bad Request when a user type is invalid', (done) => {
      serverInstance
        .post('/api/books')
        .send({
          title: 'name',
          author: 'pas',
          bookId:1,
          category:'fiction',
          quantity:12,
         registeredby:'mats',
         status:'borrowed',
         year:'2017',
         type: TYPE_INVALID

        })
        .expect(400, done)
    })

    it('should return 400 Bad Request when a bookId already exists', (done) => {
      books.findOne = (query, cb) => {
        cb(null, true)
      }

      serverInstance
        .post('/api/books')
        .send({
          bookId: 'username',
          title: 'password',
          isbn: 'isbn',
          type :TYPE_VALID
        })
        .expect(400, done)
    })

    it('should return 200 OK after adding a new book', (done) => {
      books.findOne = (query, cb) => {
        cb(null, false)
      }

      books.prototype.save = (cb) => {
        cb(null)
      }

      serverInstance
        .post('/api/books')
        .send({
         title: 'name',
          author: 'pas',
          bookId:1,
          category:'fiction',
          quantity:12,
         registeredby:'mats',
         status:'borrowed',
         year:'2017',
         type: TYPE_VALID

        })
        .expect(200, done)
    })
  })

  describe('GET /api/books', () => {
    let serverInstance
    before(() => {
      const server = createServer([(req, res, next) => {
        req.books = { // eslint-disable-line no-param-reassign
          id: 'bookId',
          isbook: () => true,
        }
        next()
      }])

      serverInstance = request(server)
    })

    it('should return 400 Bad Request when there is no group with ID', (done) => {
      getbooks.list = (id, cb) => {
        cb(null, false)
      }

      serverInstance
        .get('/api/books')
        .expect(400, done)
    })

    it('should return 200 OK with book details', (done) => {
      const group = {
        bookIdd: 'bookId',
        type: TYPE_VALID,
        createdAt: 'some-date-time',
      }

      getbooks.list = (id, cb) => {
        cb(null, id)
      }

      serverInstance
        .get('/api/books')
        .expect(200)
        .end((err, response) => {
          if (err) {
            return done(err)
          }
          expect(response.body).toEqual()
          return done()
        })
    })
  })
})

      