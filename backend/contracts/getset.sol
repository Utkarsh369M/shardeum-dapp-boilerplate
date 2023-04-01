// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.6;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract StringStorage {
    string private _storedString;

    function setString(string memory newString) public {
        _storedString = newString;
    }

    function getString() public view returns (string memory) {
        return _storedString;
    }
}