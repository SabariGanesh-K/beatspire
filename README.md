## BeatSpire - Experience Music And NFTs like Never before
<h2>Step into the world of music NFTs
And immerse yourself in a
Revolutionary new way to experience
And collect music.</h2>

<h2>Contract Details</h2>

- Contract written in solidity and deployed in Polygon Mumbai net
- Uses the protocol of ERC 721 to mint token URI of music art uploaded to IPFS
- Utilized Hardhat for deployement and testing

To deploy your own contract :-
1) Add Polygon mumbai to your wallet
2) Get yourself  a polygonscan API
3) Navigate to
   ``` /src/Contracts ```
4) Refer to env_sample file and create your env with required fields mentioned.
   ```bash
   PRIVATE_KEY = "" 
   POLYGONSCAN_API_KEY=""
  
5) Go to terminal and run ```npm install``` or ```yarn install``` to install dependecies.
6) And in hardhat perform :-
   To compile:-
   ```bash
   npx hardhat compile
   ```
   To deploy (You may modify the hardhat config according to network of your choice):-
   ```bash
   npx hardhat run scripts/deploy.js --network polygon_mumbai
   ```
   And save the contract address for frontend fetch use


<h2>Integration Details</h2>
1) Frontend UI uses ReactJUS styled using tailwindCSS , MUI and styled components modules
2) Uploading media to IPFS and getting CID is made possible by API by [NFT.STORAGE](https://nft.storage)
3) Using Alchemy endpoint RPC to connect app to deployed smart contract.

To integrate to frontend :-


  



