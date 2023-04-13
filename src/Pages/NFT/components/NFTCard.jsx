import { useContext } from 'react';


import { BlockchainConfig } from '../../../BackendConfig/BlockchainConfig';
import { shortenAddress } from './utils';

const NFTCard = ({ nft, onProfilePage }) => {
  const { nftCurrency } = useContext(BlockchainConfig);

  console.log(nft.image)
  // console.log(nft.image)
  // const img = nft.image.replace("https:ipfs.io","https://infura-ipfs.io")
  // console.log(img)
  return (
    <a href={{ pathname: '/nft-details', query: nft }}>
      <div className="flex-1 min-w-215 max-w-max xs:max-w-none sm:w-full sm:min-w-155 minmd:min-w-256 minlg:min-w-327 dark:bg-nft-black-3 bg-white rounded-2xl p-4 m-4 minlg:m-8 sm:my-2 sm:mx-2 cursor-pointer shadow-md">
        <div className="relative w-full h-52 sm:h-36 xs:h-56 minmd:h-60 minlg:h-300 rounded-2xl overflow-hidden">
          <img src={nft.image}  width={36} height={36} alt=""/>
        </div>
        <div className="mt-3 flex flex-col">
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-sm minlg:text-xl">{nft.name}</p>
          <div className="flexBetween mt-1 minlg:mt-3 flex-row xs:flex-col xs:items-start xs:mt-3">
            <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xs minlg:text-lg">{nft.price} <span className="font-normal"> {nftCurrency}</span></p>
            <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xs minlg:text-lg">{shortenAddress(onProfilePage ? nft.owner : nft.seller)}</p>
          </div>
          <div className="mt-1 minlg:mt-3 flexBetween flex-row" />
        </div>
      </div>
    </a>
  );
};

export default NFTCard;
