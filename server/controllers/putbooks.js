//const putbooks= require('../models/dummyData').books
const putbookscontroller = require('../models').books
module.exports = {

update(req, res) {
  return putbookscontroller
    .findAll()
    .then(putbookscontroller => res.status(200).send(putbookscontroller))
    .catch(error => res.status(400).send(error));
    return putbookscontroller
    .then(putbookscontroller=> {
      if (!putbookscontroller) {
        return res.status(404).send({
          message: 'books Not Found',
        });
      }
      return putbookscontroller
        .updateAttributes({
         title: req.body.title || req.body.year || req.body.author,

        })
        .then(() => res.status(200).send(putbookscontroller))  // Send back the updated todo.
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
},
}