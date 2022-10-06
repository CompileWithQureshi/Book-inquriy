const book = require('../model/model.js')

const getAlldata = async (req, res) => {
    let books;
    try {
        books = await book.find()
    } catch (error) {
        return error
    }
    if (!books) {
        return res.status(500).json({ message: "Server error" })
    }
    return res.status(200).json(books)
}



exports.getAlldata = getAlldata
