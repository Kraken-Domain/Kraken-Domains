const { task } = require("hardhat/config");

require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("@openzeppelin/hardhat-upgrades");

const dotenv = require("dotenv").config();
const privateKey = process.env.PRIVATE_KEY;

task("accounts", "Prints The List Of Accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    hardhat: {
      // See its defaults
    },
    opera: {
      url: "https://fantom-mainnet.public.blastapi.io",
      accounts: [privateKey],
      chainId: 250,
    },
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  etherscan: {
    apiKey: {
      opera: process.env.FANTOM_KEY,
    },
  },
};
