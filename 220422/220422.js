/*  
    비동기 처리
    Promise

    동기 처리
*/

// async await
/* 
    async : 비동기를 간략하게 사용할 수 있게한다.
*/

async function asyncTimeOutCheckAdult(age, timeout) {
    if(age >= 20) {
        setTimeout(() => {
            console.log(`asyncTimeOutCheckAdult ${age}`)
            return age;
        }, timeout)
    }
    else {
        setTimeout(() => {
            console.log(`됨?${age}`)
        }, timeout)
    } 
}

async function asyncCheckAdult(age, timeout) {
    if(age >= 20) return age;
    else throw new Error(age);
}

// async : await키워드 사용함수의 종료를 기다리지 않고 다음 함수를 호출한다. 
// let a = 0;
// a();
// const promise = new Promise(() => {
// )}

// function asyncCheckAdult(age) {
//     return new Promise((resolve, reject) => {
//         if(age >= 20) resolve(age);
//         else reject(age);
//     })
// }

async function testAsyncAwaitFunc() {
    await asyncTimeOutCheckAdult(10, 5000)


    const promiseCheckAdult = asyncCheckAdult(30);
    promiseCheckAdult.then((age) => {
        console.log(`${age} is adult`)
    }).catch((age) => {
        console.log(`${age} is not adult`)
    });
    
    const promiseCheckAdult1 = asyncCheckAdult(21);
    
    promiseCheckAdult1.then((age) => {
        console.log(`${age} is adult`)
    }).catch((age) => {
        console.log(`${age} is not adult`)
    });
}

testAsyncAwaitFunc();

// resolve == then 대응
// reject == catch  대응

/* 
    new Primise 호출과 동시에 비동기 처리 시작
*/

// new = 런타임 중에 실행하는 문
// const promise = new Promise((resolve, reject) => {
//     /* 
//         시간이 오래 걸리는 실행문... 5초
//     */
//     resolve();
//     reject();
// })
// then or catch는 둘중 하나만 실행함. resolve가 위에있으면 resolve먼저 실행하고
// reject가 위에있으면 reject에 들어간 함수를 먼저 실행함.
/* 
    resolve(); -> 얘 먼저 실행.
    reject();
    -----------
    reject(); -> 얘 먼저 실행.
    resolve();
   
*/
// promise.then(() => {
//     console.log('1. promise()에 then() called');
// }).catch(() => {
//     console.log('2. promise()에 catch() called');
//     }
// );

// function testFunc1() {
//     console.log('testFunc1()');

//     let startTime = new Date().getTime();
//     while(new Date().getTime() - startTime < 1000);
//     testFunc2();
// }


// function testFunc2() {
//     console.log('testFunc2()');
// }
// testFunc1();