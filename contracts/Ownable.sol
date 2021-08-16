// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.9.0;


contract Ownable{
    
    // hot and cold wallet addresses
    
    address public Owner = msg.sender;
    
    // event for ownership transfer
    
    event OwnershipTransferred(address indexed _newOwner, address indexed _owner);

   /**
   * @dev Reverts if called by any account other than the hotOwner.
   */
   
    modifier onlyOwner() {
        require(msg.sender == Owner);
        _;
    }
    
  
   /**
   * @dev Assigns new hotowner and coldOwner
   * @param _newOwner address The address which is  new owner.
   */
    
    function transferOwnership(address _newOwner) public onlyOwner {
        require(_newOwner != address(0));
        Owner = _newOwner;
        emit OwnershipTransferred(_newOwner, msg.sender);
    }

}