var fs = require("fs");
const { uploadFile, getFileStream } = require('./s3')
const S3 = require('aws-sdk/clients/s3')
const pool = require('./db')

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

for (let i = 1; i < 151; i++) {
    fs.readFile(`./image/${i}.png`, async function (err, data) {
        if (err) throw err;
        var encodedImage = new Buffer(data, 'binary');
        let hash = encodedImage.toString('base64')
        let rep = hash.replaceAll('/', '').replaceAll('+', '').replaceAll('=', '')
        let len = rep.length

        let hashCode = await rep.slice(len - 31)
        fs.writeFileSync(`./buf/${hashCode}`, encodedImage);
        // Encode to base64
        let file = {
            path: `${baseURI}${hashCode}`,
            filename: `${hashCode}`
        }
        const [result] = await pool.query(`INSERT INTO orga(number, image) VALUES("${i}","${hashCode}")`)
        console.log(result)
        console.log('file : ', file)
        let tdata = await uploadFile(file);
        console.log('tdata : ', tdata);

        // Decode from base64
        var decodedImage = new Buffer(encodedImage, 'base64').toString('binary');
    });
}

