// const name = (type) => {
//     if(type === 'send')
//     {
//         console.log('send 실행')
//         send()
//     } else if (type === 'call')
//     {
//         console.log('call 실행')
//         call()
//     }
//     return "isak"
// }

const name = (callback) => {
    callback()
    return "isak"
}

const call = () => {
    console.log('call 실행')
    return "hello"
}

const send = () => {
    console.log('send 실행')
    return "world"
}
name(call)