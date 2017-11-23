const list = require('../models').readinglist;

module.exports = {
    create(req, res) {
    if(!req.body.title ){
        res.json({message:"book title  is required"})
      }
      else
      { 
    return list
      .create({

        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        quantity:req.body.quantity,
      })
      
      .then(list => res.status(200).send(list))
      .catch(error => res.status(400).send(error));
}
  },
};