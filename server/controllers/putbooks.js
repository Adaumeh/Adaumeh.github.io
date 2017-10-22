//const putbooks= require('../models/dummyData').books
const putbooks = require('../models').mybooks
module.exports = {

update(req, res) {
  return mybooks
    .findbyId(req.params.id)
    .then(mybooks => {
      if (!mybooks) {
        return res.status(404).send({
          message: 'putbooks Not Found',
        });
      }
      return mybooks
        .update({
          title: req.body.title,
          author:req.body.author,
          quantity:req.body.quantity
        })
        .then((mybooks) => res.status(200).send(mybooks))  // Send back the updated todo.
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
},
}

/*updateById(id, updateArgs) {
    const book = this.getById(id);
    const updateFields = ['title', 'author', 'isbn',
    'publishedYear', 'quantity'];    
   updateFields.forEach(field => {
      book[field] = updateArgs[field] || book[field];
    });
    return book
  }*/