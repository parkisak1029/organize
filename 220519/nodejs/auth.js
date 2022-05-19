const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const auth2 = (str,req, res, next) => {
    console.log('hello world')
    // authorization: '<type> Basic <credentials> d2ViNzcyMjoxMjM0' v// ['', 'd2ViNzcyMjoxMjM0']
    const data = req.headers.authorization.split('Basic')[1].trim() // d2ViNzcyMjoxMjM0
    console.log(Buffer.from(data,'base64').toString('utf8').split(":"))

    // toke JWT
    // Bearer [JWT]
    next()
}

app.use((req, res, next) => {
    auth2('hello World',req, res, next)
})

const auth = (req, res) => {
    res.send('hello world')
}

app.get('/', auth)

app.listen(3005, () => {
    console.log('서버 시작')
})

/* 
    회원만 가능한 게시판 구현
                                    
                                    OAuth2.0 -> authorization / JWT / CORS
    client      front-server        back-srver      auth
    client : cookie -> 화면 
    data request ------> cookie 검증 및 확인(auth)
                <---------
*/


/* 
    url auth

    host
    auth = 다른 서버에서 내 서버로 들어올 떄 검증가능
    htpp://web772:1234@localhost:3005 = protocol + auth(생략가능) + hostname + port


    http request message
    Authorization < header내용추가

*/