import React from 'react'
import { Routes, Route} from "react-router-dom";
import { ArtistProfile } from './Artist/ArtistProfile';
import { ArtistRegisteration } from './Artist/ArtistRegisteration';
import Landing from './Landing/Landing';
import CreateNFT from './NFT/CreateNFT';
import ListedNFTs from './NFT/ListedNFTs';

export const Main = () => {
  return (
    <div>
          <Routes>
            <Route path="/home" element={<Landing />} />
            <Route path="/" element={<Landing />} />

          <Route path = "/create" element={<CreateNFT/>}/>
            <Route path = '/market' element = {<ListedNFTs/>}/>
            <Route path = '/regartist' element = {<ArtistRegisteration/>}/>
            <Route path = '/artist' element = {<ArtistProfile/>}/>

            
          </Routes>
    </div>
  )
}
