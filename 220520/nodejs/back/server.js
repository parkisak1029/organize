const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()

app.use(express.json())

app.post('/auth/token', (req, res) => {
    const {userid, userpw} = req.body
    let result = { result:false, msg:"틀렸다" }
    if(userid !== 'web7722' || userpw !== '1234') return res.status(401).json(result)
    const payload = {
        userid:'web7722'
    }
    const secret = 'isak'
    const token = jwt.sign(payload, secret, {
        algorithm:'HS256'
    })
    result = {result:true, token, msa:null}
    res.status(200).json(result)
})

app.post('/auth/verify', (req, res) => {
    const { token } = req.body
    let response = {result:false, data:null, msg:null}
    // 1. token
    // 2. salt
    try{
        const result = jwt.verify(token, 'isak')
        console.log(result)
        response.result = true
        response.data = result

        res.status(200).json(response)
    }catch(e){
        response.msg = '토큰 개조실패'
        res.status(401).json(response)
    }
})

// http://localhost:3500/user/me/web7722
// url 깔끔하게 하기 위해 post문으로한다
app.get('/user/me/:userid', (req, res) => {
    const {userid} = req.params
    const {name} = 'isak'
    const response = {
        userid,
        name
    }
    res.status(200).json(response)
})

app.listen(3500, ()=> {
    console.log('서버시작')
})