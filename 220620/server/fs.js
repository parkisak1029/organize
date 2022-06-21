var fs = require("fs");
const { uploadFile, getFileStream } = require('./s3')

const baseURI = 'buf\\';

// for (let i = 1; i < 6; i++) {
fs.readFile(`./image/1.png`, async function (err, data) {
    if (err) throw err;
    // Encode to base64
    var encodedImage = new Buffer(data, 'binary');

    await fs.writeFileSync(`./buf/1`, encodedImage);
    let files = {
        path: `${baseURI}1`,
        filename: `1`
    }
    let file = {
        path: `${baseURI}${files.ETag}`,
        filename: `${files.ETag}`
    }
    // console.log('file : ', file)
    let tdata = await uploadFile(file);
    console.log('tdata : ', tdata);
    // console.log(encodedImage);

    // Decode from base64
    var decodedImage = new Buffer(encodedImage, 'base64').toString('binary');
});
// }

