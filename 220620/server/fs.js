var fs = require("fs");
const { uploadFile, getFileStream } = require('./s3')

const baseURI = 'buf\\';

fs.readFile('./img/images/10.png', async function (err, data) {
    if (err) throw err;

    // Encode to base64
    var encodedImage = new Buffer(data, 'binary');

    fs.writeFileSync('./buf/10', encodedImage);
    let file = {
        path: `${baseURI}10`,
        filename: '10'
    }
    console.log(file)
    let tdata = await uploadFile(file);
    console.log(tdata);
    // console.log(encodedImage);

    // Decode from base64
    //   var decodedImage = new Buffer(encodedImage, 'base64').toString('binary');
});