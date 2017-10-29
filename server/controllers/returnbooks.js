const returncontroller = require('../models').returns;
//const fav = require('../models').bookusers;
module.exports = {
 create(req, res) {
    if(!req.params.userId ){
        res.json({message:"enter the userId"})
      }
      else if (!req.params.bookId){
        res.json({message:"enter the bookId"})
      }
      
      else
      { 
    return returncontroller
      .create({
        userId:req.params.userId,
        bookId: req.params.bookId
       
      })
      
      .then(returncontroller => res.status(200).send(returncontroller))
      .catch(error => res.status(400).send(error));
    }
}
  };
