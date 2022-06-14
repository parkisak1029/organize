// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract A {
    event info(string name, uint256 money);

    function sendMoney() public {
        emit info("Parkisak", 1000);
    }
}
