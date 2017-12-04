
const books = require('../models').books;

module.exports = {
  create(req, res) {
    if(!req.body.title ){
      res.status(400),
        res.json({message:"enter the message title"})
      }
      else if (!req.body.author ){
        res.status(400),
        res.json({message:"enter the name of the author"})
      }
      else if (!req.body.category){
        res.status(400),
        res.json({message:"enter category"})
      }
      else if (!req.body.isbn){
        res.status(400),
        res.json({message:"enter isbn"})
      }
      else if (!req.body.bookId){
        res.status(400),
        res.json({message:"enter book id"})
      }
      else if (!req.body.quantity){
        res.status(400),
        res.json({message:"enter quantity"})
      }else if (!req.body.registeredby){
        res.status(400),
        res.json({message:"enter registered by who"})
      }else if (!req.body.year){
        res.status(400),
        res.json({message:"year"})
      }

      else

      { 
    return books
      .create({
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        year: req.body.year,
        status: req.body.status,
        bookId: req.body.bookId,
        registeredby: req.body.registeredby,
        quantity:req.body.quantity,
        isbn:req.body.isbn
      })

      .then(books => res.status(200).send(books))
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