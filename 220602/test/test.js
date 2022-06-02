const SimpleTest = artifacts.require('simpleTest');

contract('simpleTest', (deployer, user1, user2) => {
    let simpleTest;
    beforeEach(async () => {
        console.log('BeforeEach');
        simpleTest = await SimpleTest.new();
    })

    it('Basic Test', async () => {
        console.log('Basic Test');
        let owner = await simpleTest.owner();
        console.log(owner);

        let value1 = await simpleTest.getValue();
        console.log(`value1: ${value1}`)
    })
})