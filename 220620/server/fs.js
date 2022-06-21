var fs = require("fs");
const { uploadFile, getFileStream, deleteFile } = require('./s3')
const S3 = require('aws-sdk/clients/s3')
require('dotenv').config()

const baseURI = 'buf\\';

// for (let i = 1; i < 6; i++) {
fs.readFile(`./image/1.png`, async function (err, data) {
    if (err) throw err;
    // Encode to base64
    var encodedImage = new Buffer(data, 'binary');

    await fs.writeFileSync(`./buf/1`, encodedImage);
    let file = {
        path: `${baseURI}1`,
        filename: `1`
    }
    // console.log('file : ', file)
    let tdata = await uploadFile(file);
    s3.deleteObject({
        Bucket: 'mybucket', // 사용자 버켓 이름
        Key: 'image/helloworld.jpeg' // 버켓 내 경로
    }, (err, data) => {
        if (err) { throw err; }
        console.log('s3 deleteObject ', data)
    })
    console.log('tdata : ', tdata);
    // console.log(encodedImage);

    // Decode from base64
    var decodedImage = new Buffer(encodedImage, 'base64').toString('binary');
});
// }

