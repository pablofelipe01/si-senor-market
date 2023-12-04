const fs = require('fs');

require('@nomiclabs/hardhat-waffle');

const privateKey = fs.readFileSync('.secret').toString().trim();

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    matic: {
      url: 'https://polygon-mainnet.g.alchemy.com/v2/FDU_3unRzBC_8n9qYDWsto1Mjob3mieS',
      accounts: [privateKey],
    },
    
  },
  solidity: '0.8.4',
}; 
