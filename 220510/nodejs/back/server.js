const express = require('express');
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')

app.use(cors())
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send('HelloWorld')
})


app.post('/setCookie', (req, res) => {

    res.setHeader('Set-Cookie','name=isak; httpOnly=true;').send('hello setCookie')
    console.log(req.cookies)

})

app.listen(3500, (req, res) => {
    console.log('server running')
})