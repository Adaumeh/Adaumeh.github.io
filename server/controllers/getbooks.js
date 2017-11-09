
const bookcontroller =require('../models').books;
//const users =require('../models').users;
module.exports = {
	list(req, res) {
  return bookcontroller
	
    .findAll({
      //inlude: [{
      //model: users.userId
    //}]
   })
    .then(bookcontroller => res.status(200).send(bookcontroller))
   .catch(error => res.status(400).send(error));
},
}





