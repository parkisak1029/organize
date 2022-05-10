const express = require("express")
const app = express()
const router = require("./routes")
const nunjucks = require("nunjucks")
// index는 default값으로 먼저 가져온다.



app.set("view engine", "html")
nunjucks.configure('views',{
    express:app
})

app.use(express.urlencoded({extended:true})) // urlencoded를 통해 req.body를 request메시지로 보내준다

/* 
    browser (응답)-> express(확인) (요청)-> browser(받음)
    브라우저에서 응답을 보내면 익스프레스에서 응답을 받고 요청을 보내면 브라우저에서 요청을 받는다.
*/

app.use(router)

app.listen(3000,() => {
    console.log("port 3000")
});