pragma solidity ^0.4.24;

import "./ERC165.sol";


contract Example is ERC165 {
    bytes4 public interfaceImplemented = 0x11111111;

    constructor() public {
        _registerInterface(interfaceImplemented);
    }
}
