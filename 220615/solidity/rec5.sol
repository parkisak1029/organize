// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract A {
    string public familyName = "Kim";
    string public givenName = "Suck";
    uint256 public money = 100;

    constructor(string memory _givenName) public {
        givenName = _givenName;
    }

    function getFamilyName() public view returns (string memory) {
        return familyName;
    }

    function getGivenName() public view returns (string memory) {
        return givenName;
    }

    function getMoney() public view virtual returns (uint256) {
        return money;
    }
}

// 앞에 오는 B가 상속자
contract B is A("James") {
    uint256 public earning = 0;

    function work() public {
        earning += 100;
    }

    function getMoney() public view override returns (uint256) {
        return money + earning;
    }
}
