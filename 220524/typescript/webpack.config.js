const path = require('path')

module.exports = {
    entry:{ // 내가 번들링할 파일내용 혹은 파일들
        app:'./src/a.ts'
    },
    module:{
        rules:[{
            test:/\.ts$/,
            use:'ts-loader',
            exclude:'/node_modules/'
        }] // npm install ts-loader
    },
    output:{
        filename:'server.js',
        path:path.join(__dirname,'app')
    }
}

//npx webpack