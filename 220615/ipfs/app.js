const { create } = require('ipfs-http-client');


async function ipfsClient() {
    const ipfs = await create(
        {
            host: "ipfs.infura.io",
            port: 5001,
            protocol: "https"
        }
    );
    return ipfs
}

async function saveText() {
    let ipfs = await ipfsClient();

    let result = await ipfs.add("hello");
    console.log(result);
}
// saveText();

async function saveFile() {
    let ipfs = await ipfsClient();
    let data = {
        name: "aditya",
        age: "20",
        sex: "M"
    }
    let result = await ipfs.add({ path: "abc.json", content: JSON.stringify(data) })
    console.log(result)
}

// saveFile()

async function getData(hash) {
    let ipfs = await ipfsClient();

    let asyncitr = ipfs.get(hash)
    for await (const itr of asyncitr) {
        let data = Buffer.from(itr).toString()
        console.log(data)
    }
}

getData("QmQbA7BrBNkh1bbSgtUYdUJYsHRfvRN6k5vocxHgjadUjr")