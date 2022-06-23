var fs = require("fs");
const { uploadFile, getFileStream } = require('./s3')
const S3 = require('aws-sdk/clients/s3')
const pool = require('./db')
const express = require('express')
const nunjucks = require('nunjucks')
const app = express();


require('dotenv').config()
const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY

const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey
})

const baseURI = 'buf\\';

// for (let i = 1; i < 151; i++) {
//     fs.readFile(`./image/${i}.png`, async function (err, data) {
//         if (err) throw err;
//         var encodedImage = new Buffer(data, 'binary');
//         let hash = encodedImage.toString('base64')
//         let rep = hash.replaceAll('/', '').replaceAll('+', '').replaceAll('=', '')
//         let len = rep.length

//         let hashCode = await rep.slice(len - 31)
//         fs.writeFileSync(`./buf/${hashCode}`, encodedImage);
//         // Encode to base64
//         let file = {
//             path: `${baseURI}${hashCode}`,
//             filename: `${hashCode}`
//         }
//         const [result] = await pool.query(`INSERT INTO orga(number, image) VALUES("${i}","${hashCode}")`)
//         console.log(result)
//         console.log('file : ', file)
//         let tdata = await uploadFile(file);
//         console.log('tdata : ', tdata);

//         // Decode from base64
//         var decodedImage = new Buffer(encodedImage, 'base64').toString('binary');
//     });
// }

app.set("view engine", 'html')
nunjucks.configure('views', {
    express: app
})

app.use(express.urlencoded({ extended: true }))


app.get("/", (req, res) => {
    res.render('title')
})

app.get('/test', (req, res) => {
    res.render('test')
})

app.get('/index', async (req, res) => {
    res.render('index')
    const [result] = await pool.query('SELECT * FROM titles')
})
app.post('/test', async (req, res) => {
    let { vote, address } = req.body
    let resa = await pool.query(`select * from voting WHERE address = "${address}"`)
    if (resa[0].length === 0) {
        const [result] = await pool.query(`INSERT INTO voting(address, vote)VALUES("${address}","${vote}")`)
        res.render('index', {
            items: result
        })
    } else {
        console.log("실패")
    }
    const idx = result.idx
    const { title, date } = await pool.query(`insert into voting(title, titleDate) select (title, date) from titles where idx = "${idx}"  `)

})

app.post('/title', async (req, res) => {
    let title = req.body.title;
    let resa = await pool.query(`select * from titles WHERE title = "${title}"`)
    if (resa[0].length === 0) {
        const [result] = await pool.query(`INSERT INTO titles(title)VALUES("${title}")`)
    } else {
        console.log("실패")
    }
    res.redirect(`/index`)
})

app.listen(3000, () => {
    console.log('서버 시작 localhost:3000')
})

/* 
    title 1254: 1 2 
    title 1254: 3 5
    title 1254: 4
    title 1254:

*/