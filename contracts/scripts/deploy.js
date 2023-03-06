// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  //Import contracts to deploy
  const KrakenDomainFactory = await hre.ethers.getContractFactory(
    "KrakenDomainFactoryV2"
  );

  const krakenDomainSBTFactory = await hre.ethers.getContractFactory(
    "KrakenDomainSBTFactory"
  );

  const KrakenDomainHub = await hre.ethers.getContractFactory(
    "KrakenDomainHub"
  );

  const KrakenDomainResolver = await hre.ethers.getContractFactory(
    "KrakenDomainResolver"
  );

  const KrakenSBTDomainResolver = await hre.ethers.getContractFactory(
    "KrakenSBTDomainResolver"
  );

  const ForbiddenTlds = await hre.ethers.getContractFactory("ForbiddenTldsV2");

  // const metadataAddress = "0x13e218E581908C232270F88312f263f2B93594B7";
  const metadataAddress = "0xa338D6CD0850b4283Caf3E6aE4904a32A378c4f9";

  const royaltyAddress = "0xc0C962DEC521883ca85F2e5F963954C3bc9b0359";

  const krakenHub = await KrakenDomainHub.deploy(metadataAddress);
  await krakenHub.deployed();
  const hubAddress = krakenHub.address;

  const krakenResolver = await upgrades.deployProxy(KrakenDomainResolver);
  const domainSbtResolver = await upgrades.deployProxy(KrakenSBTDomainResolver);
  await krakenResolver.deployed();
  await domainSbtResolver.deployed();
  const resolverAddress = krakenResolver.address;
  const domainSbtResolverAddress = domainSbtResolver.address;
  console.log("resolver Address:", resolverAddress);
  console.log("domain Sbt resolver address:", domainSbtResolverAddress);

  await krakenResolver.addHubAddress(hubAddress, { gasLimit: 1000000 });
  await domainSbtResolver.addHubAddress(hubAddress, { gasLimit: 1000000 });

  const forbiddenTlds = await ForbiddenTlds.deploy(hubAddress);
  await forbiddenTlds.deployed();
  const forbiddenTldsAddress = forbiddenTlds.address;

  const krakenFactory = await KrakenDomainFactory.deploy(
    0,
    forbiddenTldsAddress,
    metadataAddress,
    hubAddress,
    royaltyAddress
  );
  await krakenFactory.deployed();
  const factoryAddress = krakenFactory.address;

  await krakenResolver.addFactoryAddress(factoryAddress);

  await forbiddenTlds.addFactoryAddress(factoryAddress);

  const init = await krakenHub.init(
    krakenFactory.address,
    forbiddenTldsAddress
  );
  await init.wait();

  const toogle = await krakenFactory.toggleBuyingTlds();
  await toogle.wait();

  console.log("krakenDomainHub deployed to: ", hubAddress);
  console.log("krakenDomainFactory deployed to: ", factoryAddress);
  console.log("forbiddenTlds deployed to: ", forbiddenTldsAddress);

  const krakenSBTFactory = await krakenDomainSBTFactory.deploy(
    0,
    forbiddenTldsAddress,
    metadataAddress,
    hubAddress,
    royaltyAddress
  );
  await krakenSBTFactory.deployed();
  const sbtFactoryAddress = krakenSBTFactory.address;
  await domainSbtResolver.addFactoryAddress(sbtFactoryAddress);

  console.log("krakenDomainSBTFactory deployed to: ", sbtFactoryAddress);

  await forbiddenTlds.addFactoryAddress(sbtFactoryAddress);

  const sbtInit = await krakenHub.initSBT(krakenSBTFactory.address);
  await sbtInit.wait();

  const sbtToogle = await krakenSBTFactory.toggleBuyingTlds();
  await sbtToogle.wait();

  //   resolver Address: 0x657b8d0Cc73178e0e08CF966e32d1197F524D631
  // domain Sbt resolver address: 0x874F65871B4481B819f890e21283b386d403A790
  // krakenDomainHub deployed to:  0xB52C9D7C7a155E5D288D09Ddc8A63375344271E4
  // krakenDomainFactory deployed to:  0x19123c5AA973a9F27c07655fcda9456A6b554CAc
  // forbiddenTlds deployed to:  0x6408b41cEB9033eC649FD1bff6674C18DC8ae72E
  // krakenDomainSBTFactory deployed to:  0xbB32E0469D98003F289647F4771531A939d73a20
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
