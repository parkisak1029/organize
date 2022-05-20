const toHexString = (byteArray) => {

    return Array.from(byteArray, (byte) => {
        return ('0' + (byte & 0xFF).toString(16)).slice(-2)
    }).join('')
}

console.log(toHexString([1,79]))