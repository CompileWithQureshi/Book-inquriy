const book = require('../model/model.js')



const AddnewBook = async (req, res, next) => {
    let { Topic, version, Publisher } = req.body
    let bookdata;
    try {
        bookdata = new book({ Topic, version, Publisher })
        bookdata = await bookdata.save()
    } catch (error) {
        return next(error)
    }
    if (!bookdata) {
        return res.status(500).json({ message: "Sever error" })
    }
    return res.status(200).json(bookdata)
}




exports.AddnewBook = AddnewBook;
