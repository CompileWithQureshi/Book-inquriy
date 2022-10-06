const book = require('../model/model.js')

const UpdateBook = async (req, res, next) => {

    const id = req.params.id
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
    let UpdateBook

    try {
        UpdateBook = await book.findByIdAndUpdate(id, { Topic, version, Publisher })
    } catch (error) {
        return next(error)
    }
    if (!UpdateBook) {
        return res.status(500).json({ message: "Server issue" })
    }
    return res.status(200).json(UpdateBook)
}

exports.UpdateBook = UpdateBook
