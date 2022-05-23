// const webSocket = require('ws')

// const sockets = []
// module.exports = (server) => {
//     const wss = new webSocket.Server({ server })

//     wss.on('connection', (ws,req) => {
//         console.log('Hello Socket')
//         console.log(req.headers)
//         sockets.push(ws)
//         console.log(sockets.id)
//         ws.id = req.headers['sec-websocket-key']
        
//     })
// }

const webSocket = require('ws')

let sockets = []
module.exports = (server) => {
    const wss = new webSocket.Server({ server })

    wss.on('connection', (ws,req) => {
        ws.id = req.headers['sec-websocket-key']
        sockets.push(ws)        
        
        const obj1 = {type:'message', payload:'web7722님 환영합니다.'}
        const obj2 = {type:'add', payload:1}
        ws.send(JSON.stringify(obj1))
        ws.send(JSON.stringify(obj2))

        ws.on('close', () => {
            console.log('돔황챠')
            sockets = sockets.filter( v=> v.id === ws.id )
        })
        console.log('sockets.lenght',sockets.lenght)
    })

    function boradcast(data) {
        sockets.forEach(ws => {
            ws.send(data)
        })
    }
}