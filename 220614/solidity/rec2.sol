// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract lec2 {
    //boolean
    bool public b = false;

    bool public b1 = !false; //true
    bool public b2 = false || true; // true
    bool public b3 = false == true; // false
    bool public b4 = false && true; //false

    //byte
    bytes4 public bt = 0x12345678;
    bytes public bt2 = "String";

    //address
    address public addr = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;

    //int8
    int8 public it = 4;
    //uint256
    uint256 public uit = 12312312;
}
