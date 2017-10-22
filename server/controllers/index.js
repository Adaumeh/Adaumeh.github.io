const addbooks = require('./addbooks');
const putbooks = require('./putbooks');
const getbooks = require('./getbooks');
const borrow = require('./borrow');
//const returnbooks = require('./returnbooks');
const users = require('./users');

module.exports = {
  addbooks,
  getbooks,
  putbooks,
 borrow,
  //returnbooks,
  users,

};