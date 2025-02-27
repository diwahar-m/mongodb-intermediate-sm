const mongoose = require('mongoose');
const BookSchema = new mongoose.Schema({
    name: String, 
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author"
    }
})

module.exports = mongoose.model('Book', BookSchema)