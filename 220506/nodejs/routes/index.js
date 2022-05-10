const express = require('express')
const router = express.Router();
const pool = require('../db')
const boardRouter = require('./boardRouter')

router.get('/', (req,res) => {
    res.render('index')
})

router.use('/board', boardRouter)

module.exports = router