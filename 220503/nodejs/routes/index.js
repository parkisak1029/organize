const express = require("express")
const router = express.Router()
const boardRouter = require('./board')

// router.get("/", (req,res) => {
//     res.render("index")
//     // render는 디렉토리 기준을 server.js에 nunjucks안에 적혀있는 디렉토리 기준으로 잡는다. 
// })

router.get('/', (req, res) => {
    res.render('index')
})


router.use ('/board', boardRouter)

module.exports = router