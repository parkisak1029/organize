const express = require('express')
const nunjucks = require('nunjucks')
const app = express()
const router = require('./routes')

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.set('view engine', 'html')
nunjucks.configure('views',{
    express:app
})

app.use(router)

// const result = app.listen(3000, () => { console.log('server 시작') })
// require('./socket.js')(result)
// const result = app.listen(3000, () => { console.log('server 시작') })
// console.log(result)

require('./socket')(app.listen(3000, () => { console.log('server 시작') }))