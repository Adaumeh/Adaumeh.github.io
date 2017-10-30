//const putbooks= require('../models/dummyData').books
const acceptborrow = require('../models').borrow
module.exports = {

update(req, res) {
  return acceptborrow
    .findById(req.params.bookId && req.params.userId ) 
       .then(acceptborrow=> {
      if (!acceptborrow) {
        return res.status(404).send({
          message: 'borrow request Not Found',
        });
      }
      return acceptborrow
        .update({
           borrowdate:req.body.borrowdate
        })
        .then(() => res.status(200).send(acceptborrow))  // Send back the updated todo.
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
},
}