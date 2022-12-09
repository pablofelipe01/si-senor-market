const fs = require('fs');

require('@nomiclabs/hardhat-waffle');

const privateKey = fs.readFileSync('.secret').toString().trim();

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    matic: {
      url: 'https://distinguished-cold-owl.matic.quiknode.pro/b0077289d6d51159ee1c2cdffb84df1aab5fb63a/',
      accounts: [privateKey],
    },
    
  },
  solidity: '0.8.4',
}; 
