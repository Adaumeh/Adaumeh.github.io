//const borrows = require('../models').borrow;
module.exports = {

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
        borrowdate : req.body.borrowdate,
        duedate : req.body.duedate,
        borrowedby: req.body.borrowedby,
        userId :req.params.userId,
        bookId :req.params.bookId
      },{
  include: [{
    model: users,
    model: mybooks
  }]
     })
      .then(borrows => res.status(200).send(borrows))
      .catch(error => res.status(400).send(error));
    }
}
  };