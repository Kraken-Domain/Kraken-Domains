## Kraken Protocol

This is the monorepo for the Kraken Domain Project, a permissionless Web3 domain service, that enables individuals, communities and organizations (DAOs) to create a personalized top level domain and built on the Fantom Opera Mainnet

## Description
Kraken protocol enables users to register custom top level domains and access a minting page where they can mint their choice domain name or share with other community members. The service issues human readable addresses according to the TLD selection. These addresses serve as identification and can be used to receive and send tokens & NFTs.
  Kraken protocol offers two kind of Domains.
- A Standard (transferable) domain. - The standard domains can be used in community whitelisting, branding and marketing for Organizations and can be transfered after use. This domain is an ERC 721 NFT and can also be sold on NFT Marketplaces.

- An SBT Domain. - The SBT Domain leverages the concept of a Soul Bound Token, is bound to the wallet and cannot be transfered. The metadata can only be updated. They can be used to create decentralized identities for schools, IDs and even proof of humanity (PoH) in DAOs

## Smart Contract Links
- Metadata Address: https://ftmscan.com/address/0xa338D6CD0850b4283Caf3E6aE4904a32A378c4f9
- Forbidden TLDS: https://ftmscan.com/address/0xa798783029A0102E6cb637A35fe54EdccA7dD21E
- Domain Hub: https://ftmscan.com/address/0x188caa1a841d23c273736796e2B86cc7E5E09021
- Domain Factory: https://ftmscan.com/address/0x3E4EF3754F3325Ae05d1CC77BBdC4f0dA2738506
- SBT Domain Factory: https://ftmscan.com/address/0xc386D98c66069a14a493eb59406AB7D2BF9cA0bd
- Domain Resolver: https://ftmscan.com/address/0x1a4daf67f9681d6649cde442c0dc48bde7eba6f3
- Sbt Resolver: https://ftmscan.com/address/0x86f91c0e6c144c4ac3c3aeab3d6dc1d53c6144a1

## Workflow - Create Custom Domain (i.e .fantom, .code)
1. Launch app to Connect Wallet and redirect to Dashboard.

![read1](https://user-images.githubusercontent.com/124390899/223584576-bb9b57d3-ee48-45a7-92d1-49dc91268a10.PNG)

2. CREATE DOMAIN PAGE - User can select what kind of domain they choose to create (A Standard Transferable domain or an SBT domain).

![createDomain](https://user-images.githubusercontent.com/124390899/223584797-b94ea401-5e30-490d-99ae-46c05cbb21e2.PNG)

3. User inputs the desired parameters for their domain choice

![modal](https://user-images.githubusercontent.com/124390899/223584957-ba1d92e9-cb50-473e-93b9-3d23fea1c6d0.PNG)

4. After Domain is created and transaction verified, the newly created TLD (top level domain) is populated from the smart contract to the domain Minting page as a TLD option, using the Fantom Mainnet Rpc.
5. User can proceed to the MINTER page to choose what the minting page they'd like to go to.

![minter](https://user-images.githubusercontent.com/124390899/223585105-35ea7b5b-44fe-4b3c-aedc-717118accf96.PNG)

## Workflow - Mint a Domain

### You can visit either of the link depending on the kind of domain you want to mint
- Standard (Transferable) Domain Link - https://kraken-protocol.vercel.app/mint-domain

- Sbt Domain Link - https://kraken-protocol.vercel.app/mint-sbt

![mintdomain](https://user-images.githubusercontent.com/124390899/223585972-da5fcfb0-7347-4001-8807-aa89cb0c0539.PNG)




## Tech Stack Overview
- Frontend: Next.js, Tailwindcss, Wagmi, Rainbowkit, ethers.js
- Backend (Smart Contracts): Solidity, Hardhat

## Get Started

### Prerequisites
- node version >=18.0.0
- Create an account on ftmscan.com to get your API key
- (recommended) Create a wallet that will be only used to deploy the smart contracts






