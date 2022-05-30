// const Web3 = require('web3');

// const web3 = new Web3(Web3.givenProvider || 'ws://localhost:8545');

// console.log(web3);


const connectPromise = async () => {
    let web3;
    let accounts;
    if (window.ethereum) { // 메타마스크가 설치되어 있을 때
        console.log('1. connectPromise')
        web3 = new Web3(window.ethereum);
    }
    else { // 설치가 안되어 있을 때
        console.log('메타마스크 설치하셈')
    }

    if (web3) {
        console.log('2. connectPromise')
        accounts = await web3.eth.requestAccounts();
        console.log('accounts : ', accounts);
    }
}

connectWallet.addEventListener('click', () => {
    console.log('3. connectWallet')
    connectPromise();
})