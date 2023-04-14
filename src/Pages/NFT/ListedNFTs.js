import React, { useState, useEffect, useContext } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { BlockchainConfig } from '../../BackendConfig/BlockchainConfig';
import { FirebaseConfig } from '../../BackendConfig/FirebaseConfig';
import Navbar from '../Actors/NavBar';
import Loader from './components/Loader';
import NFTCard from './components/NFTCard';

const ListedNFTs = () => {
  const [nfts, setNfts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { fetchMyNFTsOrListedNFTs } = useContext(BlockchainConfig);
  const {getMoodDatas} =useContext(FirebaseConfig)
  const [filteredNfts, setFilteredNfts] = useState(nfts)

  const filterNfts=async(mood) =>{
    setIsLoading(true)
    let dat = await getMoodDatas(mood)
    let temp = [];
    console.log("dd",dat)
    nfts.forEach((item)=>{
      console.log("wer",item.image)
      for (let i=0;i<dat.length;i++){
        console.log("dddweeeed",item.image===dat[i])
        if(item.image===dat[i]){
          temp.push(item)
          console.log("yes")
        }
      }
      
    })
    setFilteredNfts(temp);
    setIsLoading(false)

  }
  useEffect(() => {
    fetchMyNFTsOrListedNFTs('fetchItemsListed')
      .then((items) => {
        setNfts(items);
        setFilteredNfts(items)
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="flexStart min-h-screen">
        <Loader />
      </div>
    );
  }

  // if (!isLoading && nfts.length === 0) {
  //   return (
  //     <div className="flexCenter sm:p-4 p-16 min-h-screen">
  //       <h1 className="font-poppins dark:text-white text-nft-black-1 text-3xl font-extrabold">No NFTs Listed for Sale</h1>
  //     </div>
  //   );
  // }

  return (
    <>
    <Navbar/>
    <ReactAudioPlayer
 src = "https://ipfs.io/ipfs/bafybeid5gljppqk6ti3eb2x7mbvgjghafe4xyugabapb7yyiis2bnhnkzq/y2mate.com%20-%20Sickick%20Infected%20Ringtone%20%20New%20Ringtone%202022%20%20Attitude%20BGM%20Ringtone%20%20Ringtones%20Addict%20.mp3"
  autoPlay
/>
    <div className="flex justify-center sm:px-4 p-12 min-h-screen">
      <div className="w-full minmd:w-4/5">
        <button onClick={()=>filterNfts("happy")}>Filter happy</button>
        <div className="mt-4">
          <h2 className="font-poppins dark:text-white text-nft-black-1 text-2xl font-semibold mt-2 ml-4 sm:ml-2">NFTs listed for sale</h2>
          <div className="mt-3 w-full flex flex-wrap justify-start md:justify-center">
            {
              filteredNfts.map((nft) => <> <NFTCard key={nft.tokenId} nft={nft} /> </>)
            }
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ListedNFTs;
