const borrows = require('../models').borrow;
module.exports = {
  //const bookId = req.params.bookId,
  //const userId = req.params.userId

create(req, res) {
  if(!req.body.borrowdate ){
        res.json({message:"enter the borrowdate"})
      }
      else if (!req.body.duedate ){
        res.json({message:"enter the duedate"})
      }
      else if (!req.body.borrowedby){
        res.json({message:"enter borrowedby field"})
      }
      else
      { 
        return borrows
        
.create({
      userId: req.params.userId,
        bookId: req.params.bookId

     })
      .then(borrows => res.status(200).send(borrows))
      .catch(error => res.status(400).send(error));
    }
}
  };
  