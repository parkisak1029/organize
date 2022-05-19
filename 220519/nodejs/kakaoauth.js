const express = require('express')
const cors = require('cors')
const app = express()
const nunjucks = require('nunjucks') 
const axios = require('axios')
const qs = require('qs') // {a:'asd',b:'aa'} -> a=asd&b=aa

/* 
    REST API 키	a16d7dd49ca4a59ff2402357d8eaa31f
    Redirect URL = http://localhost:3005/auth/kakao
    secret key = KP36gfYSUwkc0wWnnJJuSZH1ASi2DmSE
*/
// kakao login 기본 base
const client_id = 'a16d7dd49ca4a59ff2402357d8eaa31f'
const redirect_uri = 'http://localhost:3005/auth/kakao'
const client_secret = 'KP36gfYSUwkc0wWnnJJuSZH1ASi2DmSE'
const host = 'https://kauth.kakao.com'


app.set('view engine', 'html')
nunjucks.configure('views', {
    express:app
})

app.use(cors())

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/kakao/login', (req, res) => {
    const redirect = `${host}/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`
    res.redirect(redirect) // 실제 kakao 주소로 보냄    
})

app.get('/auth/kakao', async(req, res) => {
    const {query:{code}} = req
    // axios.post = url, body, headers
    const body = qs.stringify({
        grant_type:'authorization_code',
        client_id,
        redirect_uri,
        code,
        client_secret
    })
    const headers = {'Content-type':'application/x-www-form-urlencoded;charset=utf-8'}
    const response = await axios.post(`${host}/oauth/token`, body, headers)
    
    console.log(response.data)

    try{
        const { access_token } = response.data
        const url = 'https://kapi.kakao.com/v2/user/me'
        const userinfo = await axios.post(url, null, {
            headers:{
                'Authorization' :`Bearer ${access_token}`,
                'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
        })
        console.log(userinfo.data)
    }catch(e) {
        
    }

    res.send('hello')
})

app.listen(3005, () => {
    console.log('server start')
})