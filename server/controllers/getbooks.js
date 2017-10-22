
const bookcontroller =require('../models').mybooks;
//const users =require('../models').users;
module.exports = {
 list(req, res) {
  return bookcontroller
    .findAll({})
    .then(bookcontroller => res.status(200).send(bookcontroller))
    .catch(error => res.status(400).send(error));
},
}





