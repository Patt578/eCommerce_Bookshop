const router = require('express').Router();
const Book = require('../db').import('../models/book');
require('dotenv').config();

router.post('/createBook',(req,res)=>{
    let title = req.body.title;
    let author = req.body.author;
    let desc = req.body.description;
    let images = req.body.images;
    let price = req.body.price;

    Book.create({
        title: title,
        author: author,
        description: desc,
        images: images,
        price:price
    })
    .then(
        createSuccess = (book)=>{
            res.json({
                book:book,
                message:'book saved to db'
            })
        }
    )
    createError = err => res.send(500,err);

})
router.get('/displayBooks',(req,res)=>{

    
    Book.findAll().then(books =>{
        res.json(books);
    })


})

router.delete('/delete/:id', function(req, res) {
    var data = req.params.id;
    
    Book
        .destroy({
            where: { id: data, } 
        }).then(
            function deleteLogSuccess(data){ 
                res.status("you removed a book");
            },
            function deleteLogError(err){
                res.status(500, err.message);
            }
        );
});


module.exports = router; 