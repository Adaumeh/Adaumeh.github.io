const reviewcontroller = require('../models').favs;
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
    return reviewcontroller
      .create({
        userId:req.params.userId,
        bookId: req.params.bookId
       
      })
      
      .then(reviewcontroller => res.status(200).send(reviewcontroller))
      .catch(error => res.status(400).send(error));
    }
}
  };

