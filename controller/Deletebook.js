const book = require('../model/model.js')

const Deletebook = async (req, res, next) => {
    const id = req.params.id
    let Deletebook;
    try {
        Deletebook = await book.findByIdAndDelete(id)
    } catch (error) {
        return next(error)
    }
    if (!Deletebook) {
        return res.status(500).json({ message: "Server issue" })
    }
    return res.status(200).json({ message: "Book deleted successfully" })
}

exports.Deletebook = Deletebook