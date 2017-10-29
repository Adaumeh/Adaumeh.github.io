
const getfav =require('../models').favs;
//const users =require('../models').users;
module.exports = {
	list(req, res) {
  return getfav
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
    .findById(req.params.userId)
    .then(getfav => res.status(200).send(getfav))
   .catch(error => res.status(400).send(error));
},
}





