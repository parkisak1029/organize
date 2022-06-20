reqyure('dotenv').config()
const fs = require('fs')
const S3 = require('aws-sdk/clients/s3')

const bucketName = process.env.AWS_BUCKET_NAME
const regine = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY

const s3 = new S3({
    regine,
    accessKeyId,
    secretAccessKey
})

// uploads a file to S3
export function uploadFile(file) {
    const fileStream = fs.createReadStream(file.path)

    const uploadParams = {
        Bucket: bucketName,
        Body: fileStream,
        Key: file.fileName
    }

    return s3.upload(uploadParams).promise()
}

exports.uploadFile = uploadFile


// downloads a file from S3