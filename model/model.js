const mongoose = require('mongoose')


const booksData = mongoose.Schema({
    Topic: {
        type: String,
        require: true
    },
    version: { type: Number },
    Publisher: {
        type: String,
        require: true
    }
})

const model = mongoose.model("book", booksData)

module.exports = model