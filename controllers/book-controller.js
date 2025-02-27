const Author = require('../models/Author');
const Book = require('../models/Book');

const createAuthor = async(req, res)=> {

    try{
        const author = new Author(req.body);
        await author.save();

        res.status(201).json({
            success: true,
            data: author
        })

    }catch(err){
        res.status(500).json({
            success: false, 
            message: 'Something went wrong'
        })
    }
}

const createBook = async(req, res)=> {
    try{
        const book = new Book(req.body);
        await book.save();

        res.status(201).json({
            success: true,
            data: book
        })

    }catch(err){
        res.status(500).json({
            success: false, 
            message: 'Something went wrong'
        })
    }
}

const getBookWithAuthor =async(req, res)=> {
    try{
        const bookId = req.params.id
        const book = await Book.findById(bookId).populate('author');

        if(!book){
            return res.status(404).json({
                success: false,
                message:'Book not found'
            })
        }
        res.status(200).json({
            success: true,
            data: book
        })

    }catch(err){
        console.log(err)
        res.status(500).json({
            success: false, 
            message: 'Something went wrong'
        })
    }
}

module.exports = {createAuthor, createBook, getBookWithAuthor}
