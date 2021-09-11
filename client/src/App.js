import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Web3 from 'web3';
import { simpleStorageAbi } from './abis';
import './App.css';
const web3 = new Web3(Web3.givenProvider);
const contractAddr = '0x1727C19D3559C3c1F536063E70239eedF03d5639';
const SimpleContract = new web3.eth.Contract(simpleStorageAbi, contractAddr);

function App() {
  const [number,Transfer] = useState("0x",0);
  const [gettokenbalance, setGetNumber] = useState('0x00');
  
  const handleGetTokenBalance = async (e) => {
    e.preventDefault();
    const result = await SimpleContract.methods.get().call();
    setGetNumber(result);
    console.log(result);
  }

  const handleTransfer = async (e) => {
    e.preventDefault();    
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    const gas = await SimpleContract.methods.transfer(string,number).estimateGas();
    const result = await SimpleContract.methods.transfer(string,number).send({
      from: account,
      gas 
    })
    console.log(result);
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleTransfer}>
          <label>
            Transfer:
            <input 
              type="text"
              name="name"
              value={string,number}
              onChange={ e => Transfer(e.target.value) } />
          </label>
          <input type="submit" value="Transfer Tokens" />
        </form>
        <br/>
        <button
          onClick={handleGetTokenBalance}
          type="button" > 
          Get Token Balance
        </button>
        { gettokenbalance}
      </header>
    </div>  
);
}

export default App;
