// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract A {
    constructor(string memory _givenName) public {
        givenName = _givenName;
    }

    string public familyName = "Kim";
    string public givenName = "Suck";
    uint256 public money = 100;

    function getFamilyName() public view returns (string memory) {
        return familyName;
    }

    function getGivenName() public view returns (string memory) {
        return givenName;
    }

    function getMoney() public view returns (uint256) {
        return money;
    }
}

// 앞에 오는 B가 상속자
contract B is A("James") {

}
