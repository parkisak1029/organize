const SimpleTest = artifacts.require("simpleTest");

module.exports = function (deployer) {
    deployer.deploy(SimpleTest);
};
