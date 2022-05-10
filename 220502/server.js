const express = require("express")
// 내가 사용할 수 있을 정도의 정보로만 설명할 수 있어야 한다.
const app = express() //app : 객체
const router = require('./routes/index')

app.use(express.urlencoded({extended:true})) // req.body를 사용하기 위한 미들웨어

// express.urlencoded({extended:true}) // result -> 
/* 
    (req, res, next) => {
        req.body = {}
        next()
        반환
    }
*/

app.use('/', (req, res, next) => {
    // res.send('Hello World!')
    next()
})

app.use('/', (req, res, next) => {
    res.send('Hello World!11111')
    next()
})

// app.use(router)

app.listen(3000, () => {
    console.log("서버시작")
})      