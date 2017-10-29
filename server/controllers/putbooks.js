//const putbooks= require('../models/dummyData').books
const putbookscontroller = require('../models').books
module.exports = {

update(req, res) {
  return putbookscontroller
    .findById(req.params.bookId) 
       .then(putbookscontroller=> {
      if (!putbookscontroller) {
        return res.status(404).send({
          message: 'books Not Found',
        });
      }
      return putbookscontroller
        .update({
          title: req.body.title || req.body.author||req.body.year|| req.body.quantity|| req.body.isbn
        })
        .then(() => res.status(200).send(putbookscontroller))  // Send back the updated todo.
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
},
}