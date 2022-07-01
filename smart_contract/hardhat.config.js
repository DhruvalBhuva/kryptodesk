//https://eth-rinkeby.alchemyapi.io/v2/CSc7d6Fvp0MaOwVfjDnWA9tb0jHmAP4a

require('@nomiclabs/hardhat-waffle');
module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/CSc7d6Fvp0MaOwVfjDnWA9tb0jHmAP4a',
      accounts: ["a82b87e17e4ac57c2965e96a8a0ab265ad3f54c36925cfdfb7c2857ee7585980"]
    }
  }
}