const favouritecontroller = require('../models').favbooks;
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
    return favouritecontroller
      .create({
        userId:req.params.userId,
        bookId: req.params.bookId
       
      })
      
      .then(favouritecontroller => res.status(200).send(favouritecontroller))
      .catch(error => res.status(400).send(error));
    }
}
  };


  /*create(req, res) {
    include: [
        {
          model: users,
          include: [
            {
              model: books
            }
          ]
        }
      ]
    if(!req.params.userId ){
        res.json({message:"enter the userId"})
      }
      else if (!req.params.bookId ){
        res.json({message:"enter the bookId"})
      }
      else
      { 
    return favouritecontroller
      .create({
        userId: req.body.userId.users,
        bookId: req.body.bookId
        
      })
      
      .then(favouritecontroller => res.status(200).send(favouritecontroller))
      .catch(error => res.status(400).send(error));
    }
}
  };*/

















