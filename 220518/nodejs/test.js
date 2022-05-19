const time = () => parseInt(Math.random() * 10 + 1)*1000

// const 아반떼 = (cb) => {
//     console.log('경기시작')
//     setTimeout (()=> {
//         console.log('아반떼 end')
//         cb()
//     },time())
//     console.log('아반떼 go')
// }

// const 소나타 = (cb) => {
//     setTimeout(() => {
//         console.log('소나타 end')
//         cb()
//     }, time());
//     console.log('소나타 go')
// }

// const 제네시스 = (cb) => {
//     setTimeout(() => {
//         console.log('제네시스 end')
//         cb()
//     }, time());
//     console.log('제네시스 go')
// }
// console.log('경기 시작')
// 아반떼( ()=>{
//     소나타( ()=> {
//         제네시스( ()=> {
//             console.log('경기 끝')
//         })
//     })
// })

// promise -> callback 지옥을 나가기 위해 만듬.

// promise : 객체

// const a = new Promise((resolve, reject) => {
//     for(let i =0; i < 10; i++) {
//         console.log(i)
//     }
//     try {
//         resolve('a')
//         if(i==1) {
//             console.log('aa')
//         }
//         if(i==2) {
//             console.log('aaa')
//         }
//     } catch(e) {
//         reject('b')
//     }

// });
// console.log(a)

// const a = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('aaaa')
//     }, 1000);
//     reject('bbbb')
// });
// a
//     .then( a=>console.log(a))
//     .catch( e =>console.log(e))



const 아반떼 = () => {
    return new Promise((resolve, rejects) => {
        setTimeout (()=> {
            resolve('아반떼 end')
        },time())
        console.log('아반떼 go')
    }) 
}
// console.log('시작')
// 아반떼().then(a=>{
//     console.log(a)
//     return 소나타()
// })
// .then(a => {
//     console.log(a)
//     return 제네시스()
// })
// .then(a => {
//     console.log(a)
//     console.log('끝')
// })
const 소나타 = () => {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            resolve('소나타 end')
        }, time());
        console.log('소나타 go')
    })
}

const 제네시스 = () => {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            resolve('제네시스 end')
        }, time());
        console.log('제네시스 go')
    })
}

async function main() {
    console.log('시작')
    const result = await 아반떼()
    console.log(result)
    const result2 = await 소나타()
    console.log(result2)
    const result3 = await 제네시스()
    console.log(result3)
    console.log('끝')
}

main()
// console.log('a)
// console.log('경기 시작')
// 아반떼( ()=>{
//     소나타( ()=> {
//         제네시스( ()=> {
//             console.log('경기 끝')
//         })
//     })
// })