const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const router = require('./routes')


app.set("view engine", 'html')
nunjucks.configure('views',{
    express:app
})

app.use(express.urlencoded({extended:true}))

app.use(router)

app.listen(3000, () => {
    console.log('3000port start')
})