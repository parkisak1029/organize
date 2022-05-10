const express = require('express')
const app = express()

app.use((req, res, next) => {
    // console.log('쿠키찾기')
    // req.cookie = req.headers.cookie.split('=')[1]
    const {cookie} = req.headers
    // map 인자값이 콜백함수
    // console.log(cookie.split(';').map(v=>v.trim()))

    const cookies = cookie
                        .split(';') // []
                        .map( v => v.trim().split('=')) // trim() : string
                        .reduce((acc, val) => {
                            acc[val[0]]=val[1]
                            return acc
                        }, {})
    // const newArr = [];
    // for(let i = 0; i <cookies.length; i++)  {
    //     // console.log(cookies[i].trim()) // Datatype:string.trim() : 
    //     newArr.push(cookies[i].trim())
    // }
    // const newArr2 = cookie
    //                 .split(';')
                    
    // // console.log(newArr2)

    // // reduce로 map, filter등을 표현가능
    // // 내가 배열상태인 것들을 객체로 변환할때만 reduce를 사용해서 추측하기 쉽게 만들어야 한다.
    // const co = newArr2

    // console.log(co)
    req.cookie = cookies
    next()
})

app.get('/', (req, res) => {
    console.log(req.cookie)
    res.send('hello World')
})

app.get('/cookie', (req, res) => {
    console.log(req.cookie)
    res.send('hello cookie')
})

app.get('/setCookie', (req, res) => {
    // req.body = userid, userpw
    // select * from user where userid= req.body.user and userpw = req.body.userpw
    // row 1개가 나오는가 = login 성공
    // row = 0 : 쿠키 미생성
    /* 
        http 통신프로토콜에서
        Set-Cookie에 대한 문법이 따로 존재한다.
        그것만 지켜주면서 작성하면 httpOnly사용 가능하다.
    */

    /* 
        로그인을 했는데, 5분뒤에 로그인이 풀림.
        5분뒤에 쿠키가 사라지면됨.

        Max-age : 기간설정
        Expires : 짦은 시간 5분, 10분을 표현할때 사용

        path : 내가 요청으로 들어온 쿠키를 사용하는 것 어떤 라우터든.
    */
        console.log(req.cookie)

    const time = 6000
    res.setHeader('Set-Cookie','name2=isak2; httpOnly=true;Max-age='+time).send('hello setCookie')
})

app.listen(3000, () => {
    console.log('server running')
})