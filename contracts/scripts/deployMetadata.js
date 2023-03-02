// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

const main = async () => {
  //Import contracts to deploy
  const KrakenMetadata = await hre.ethers.getContractFactory("KrakenMetadata");
  const krakenMetadata = await KrakenMetadata.deploy();
  await krakenMetadata.deployed();
  console.log("Kraken Metadata Contract deployed to:", krakenMetadata.address);

  // Kraken Metadata Contract deployed to: 0x13e218E581908C232270F88312f263f2B93594B7

  //   resolver Address: 0x66FD5c67d847E55a57616a49d5F1C161334799ef
  // domain Sbt resolver address: 0x46519b639496e1051e59fD5A2a50ecaD6Cd9d338
  // krakenDomainHub deployed to:  0xa1bBcdAFdC70e6C150919e48c9BB166a0125A7Eb
  // krakenDomainFactory deployed to:  0xD57ddE7aa7751B59ff19673Af2412F0b27f8A78A
  // forbiddenTlds deployed to:  0xEB68B7B7d7F7A94FC65FA0aa916845DC510aA380
  // krakenDomainSBTFactory deployed to:  0xD53e24eeD08e375fa771082677DD66B61efB65Ed
};

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
