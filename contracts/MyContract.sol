
pragma solidity ^0.4.18;

contract MyContract {
  uint public data;

  function setData(uint _data) external {
    data = _data;
  }
}