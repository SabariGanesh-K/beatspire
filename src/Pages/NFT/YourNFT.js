import React, { useState, useEffect, useContext } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { BlockchainConfig } from '../../BackendConfig/BlockchainConfig';
import { FirebaseConfig } from '../../BackendConfig/FirebaseConfig';
import Navbar from '../Landing/components/Navbar';

import Loader from './components/Loader';
import NFTCard from './components/NFTCard';

const YourNFTs = () => {
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
    fetchMyNFTsOrListedNFTs('')
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



  return (
    <>
    <Navbar/>
 
    <div className="flex justify-center sm:px-4 p-12 min-h-screen">
  
      <div className="w-full minmd:w-4/5">
        <button className='bg-green-800 p-2 font-bold text-white rounded-xl mx-3' onClick={()=>filterNfts("happy")}> Happy 😀</button>
        <button className='bg-green-800 p-2 font-bold text-white rounded-xl mx-3' onClick={()=>filterNfts("angry")}> Angry 😡</button>
        <button className='bg-green-800 p-2 font-bold text-white rounded-xl mx-3' onClick={()=>filterNfts("sad")}> sad 😖</button>


        <div className="mt-4">
        {(!isLoading && filteredNfts.length === 0) ? (<div className="flexCenter sm:p-4 p-16 ">
        <h1 className="font-poppins dark:text-white text-nft-black-1 text-3xl font-extrabold">No NFTs owned yet</h1>
      </div>):
          <h2 className="font-poppins dark:text-white text-nft-black-1 text-2xl font-semibold mt-2 ml-4 sm:ml-2">NFTs you own</h2>
      }
      
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

export default YourNFTs;
