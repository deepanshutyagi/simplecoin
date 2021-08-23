
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.9.0;


import "./Ownable.sol";
import "./SafeMath.sol";
import "./ERC20.sol";

/**
*@title FSOUSD
*/

contract SimpleCoin is Ownable, ERC20{
    using SafeMath for uint256;
    
    // parameters for silatoken
    string  public constant name = "FSOUSD";
    string  public constant symbol = "FSO";
    uint256 public constant decimals = 18;
    string  public constant version = "1.0";
    uint256 public constant tokenExchangeRate = 1000;
    
    // Events fired during successfull execution of main silatoken functions
    event Mint(address indexed _to, uint256 indexed _value);


   function mint(address _to, uint256 _amount) internal {
        totalSupply = totalSupply.add(_amount);
        balances[_to] = balances[_to].add(_amount);                 
        emit Mint(_to, _amount);                     
    }

    
    function withdraw() public onlyOwner {
        msg.sender.transfer(address(this).balance);
    }
    
    function() external payable{
    
        uint256 tokens = msg.value.mul(tokenExchangeRate);
        mint(msg.sender, tokens);
    }
}