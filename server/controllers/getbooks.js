
const bookcontroller =require('../models').books;
const users =require('../models').users;
module.exports = {
	list(req, res) {
  return bookcontroller
	//.findAll({})
        //.then(bookcontroller => res.json({
          //  error: false,
           // data: bookcontroller
        //}))
        //.catch(error => res.json({
            //error: true,
            //data: [],
            //error: error
       // }));

// 
    .findAll({
      inlude: [{
      model: users.userId
    }]
   })
    .then(bookcontroller => res.status(200).send(bookcontroller))
   .catch(error => res.status(400).send(error));
},
}





