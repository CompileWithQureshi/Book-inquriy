const express = require('express')
const { Deletebook } = require('../controller/Deletebook')
const { getAlldata } = require('../controller/getmodel')
const { AddnewBook } = require('../controller/Postnewbook')
const { UpdateBook } = require('../controller/updatebook')
const router = express.Router()
const book = require('../model/model')

router.get('/api/v1', getAlldata)

router.post('/post', AddnewBook)
router.put('/:id', UpdateBook)
router.delete('/:id', Deletebook)


module.exports = router