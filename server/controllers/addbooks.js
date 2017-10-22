
const mybooks = require('../models').mybooks;

module.exports = {
  create(req, res) {
    if(!req.body.title ){
        res.json({message:"enter the message title"})
      }
      else if (!req.body.author ){
        res.json({message:"enter the name of the author"})
      }
      else if (!req.body.category){
        res.json({message:"enter category"})
      }
      else
      { 
    return mybooks
      .create({
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        year: req.body.year,
        status: req.body.status,
        bookId: req.body.bookId,
        registeredby: req.body.registeredby,
        quantity:req.body.quantity
      })
      
      .then(mybooks => res.status(200).send(mybooks))
      .catch(error => res.status(400).send(error));
    }
}
  };


















//let id = 6;
//module.exports = {
  //  create(req, res) {
   // if(!req.body.title ){
       // res.json({message:"title field is required"})
     // }
      //else if (!req.body.category ){
      //  res.json({message:"category field is required"})
      //}else if (!req.body.author ){
        //res.json({message:"author field is required"})
      //}
      
      //else
      //{ 

    //bookData[id] = {
      //id: id,
      //title: req.body.title,
      //author: req.body.author,
      //year: req.body.year,
      //category: req.body.category,
     //status:req.body.status
    //};
    //res.status(200).send(bookData[id]);
    //id++;
//}
//}
//}