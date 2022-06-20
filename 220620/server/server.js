const express = require('express')

const fs = require('fs')
const utils = require('util')
const unlinkFile = utils.promisify(fs.unlink)

const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const { uploadFile, getFileStream } = require('./s3')

const app = express()

app.get('/images/:Key', (req, res) => {
    const key = req.params.Key
    const readStream = getFileStream(key)

    readStream.pipe(res)
})

app.post('/images', upload.single('image'), async (req, res) => {
    const file = req.file
    console.log(file)
    const result = await uploadFile(file)
    await unlinkFile(file.path)
    console.log(result)
    const description = req.body.description
    res.send({ imagePath: `/images/${result.Key}` })
})

app.listen(8080, () => {
    console.log('localhost:8080')
})