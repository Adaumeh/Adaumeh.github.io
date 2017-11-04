import request from 'supertest'
import expect from 'expect'

import createServer from 'server/server'
import User from 'server/models/user'
import { USER_TYPE_USER } from 'server/constants'

describe('UserController', () => {
  describe('POST /api/user/signup', () => {
    it('should return 401 Unauthorized when a user has not logged in', (done) => {
      request(createServer())
        .POST('/api/user/signup')
        .expect(401, done)
    })



    it('should return 400 Bad Request when parameters are missing', (done) => {
      serverInstance
        .post('/api/user/signup')
        .expect(400, done)
    })

    it('should return 400 Bad Request when a user type is invalid', (done) => {
      serverInstance
        .post('/api/user/signup')
        .send({
          name: 'name',
          password: 'password',
          confirmpassword:'confirmpassword',
          phone:BIGINT,
          type: 'invalid-user-type',
        })
        .expect(400, done)
    })

    it('should return 400 Bad Request when a username already exists', (done) => {
      User.findOne = (query, cb) => {
        cb(null, true)
      }

      serverInstance
        .post('/api/user/login')
        .send({
          username: 'username',
          password: 'password',
          type: USER_TYPE_USER,
        })
        .expect(400, done)
    })

    it('should return 200 OK after adding a new user', (done) => {
      User.findOne = (query, cb) => {
        cb(null, false)
      }

      User.prototype.save = (cb) => {
        cb(null)
      }

      serverInstance
        .post('/api/user/login')
        .send({
          username: 'username',
          password: 'password',
          type: USER_TYPE_USER,
        })
        .expect(200, done)
    })
  })

  describe('GET /api/group/:id/messages', () => {
    let serverInstance
    before(() => {
      const server = createServer([(req, res, next) => {
        req.group = { // eslint-disable-line no-param-reassign
          id: 'goup_id',
          isuser: () => true,
        }
        next()
      }])

      serverInstance = request(server)
    })

    it('should return 400 Bad Request when there is no group with ID', (done) => {
      getmessages.list = (id, cb) => {
        cb(null, false)
      }

      serverInstance
        .get('/api/group/:id/messages')
        .expect(400, done)
    })

    it('should return 200 OK with group details', (done) => {
      const group = {
        id: 'group_id',
        type: GROUP_TYPE_GROUP,
        createdAt: 'some-date-time',
      }

      group.list = (id, cb) => {
        cb(null, id)
      }

      serverInstance
        .get('/api/users/group_id')
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

      