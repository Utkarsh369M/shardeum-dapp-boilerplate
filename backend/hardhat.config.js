require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()
require("@nomiclabs/hardhat-etherscan");

module.exports = {

  solidity: "0.8.6",
  networks: {
    hardhat: {
      chainId: 1337
    },
    liberty: {
      url: "https://liberty20.shardeum.org/",
      accounts: [process.env.MAIN_ACCOUNTS],
      chainId: 8081,
    },
  },
  settings: {
    optimizer: {
      enabled: true
    }
  },
  gasReporter: {
    enabled: true,
    currency: "INR",
    coinmarketcap: process.env.COINMARKETCAP,
    token: "SHM",
    outputFile: "gasReports.txt",
    noColors: true
  }
}
