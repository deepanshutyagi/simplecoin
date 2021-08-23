var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "health legal net ribbon orchard belt since convince elder lucky onion depend";
module.exports = {
 networks: {
  development: {
   host: "127.0.0.1",
   port: 7545,
   network_id: "*"
  },
  rinkeby: {
      provider: function() { 
       return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/ad90723cdef44586ba670c17f96e6d2c");
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
  }
 }
};