// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

contract MoneySaver {
    uint private m_goal;

    constructor(uint goal) {
        m_goal = goal;
    }

    receive() external payable {}
    
    function setGoal(uint goal) public {
        m_goal = goal;
    }

    function getGoal() external view returns (uint) {
        return m_goal;
    }

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }

    function withdraw() public {
        if (getBalance() >= m_goal) {
            selfdestruct(payable(msg.sender));
        }
    }

}
