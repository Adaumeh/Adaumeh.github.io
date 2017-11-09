//const putbooks= require('../models/dummyData').books
const returnbooks = require('../models').books
module.exports = {

create(req, res) {
  return returnbooks
    .findById(req.params.bookId) 
       .then(returnbooks=> {
      if (!returnbooks) {
        return res.status(404).send({
          message: 'books Not Found',
        });
      }
      return returnbooks
        .create({
          status: req.body.status
        })
        .then(() => res.status(200).send(returnbooks))  // Send back the updated todo.
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
},
}