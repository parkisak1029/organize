const express = require('express')
const router = express.Router() // 반환값은 무엇일까?
// router = 객체

router.get('/user', (req, res) => {
    res.send('router hi')
})

module.exports = router