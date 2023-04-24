import React from 'react'
import { Routes, Route} from "react-router-dom";
import { ArtistProfile } from './Artist/ArtistProfile';
import { ArtistRegisteration } from './Artist/ArtistRegisteration';
import Landing from './Landing/Landing';
import CreateNFT from './NFT/CreateNFT';
import ListedNFTs from './NFT/ListedNFTs';
import YourNFTs from './NFT/YourNFT';
import ExploreNFTs from './NFT/ExploreNFTs'
import { Admin } from './Admin/Admin';
export const Main = () => {
  return (
    <div>
          <Routes>
            <Route path="/home" element={<Landing />} />
            <Route path="/" element={<Landing />} />

          <Route path = "/create" element={<CreateNFT/>}/>
            <Route path = '/market' element = {<ExploreNFTs/>}/>
            <Route path = '/regartist' element = {<ArtistRegisteration/>}/>
            <Route path = '/artist' element = {<ArtistProfile/>}/>
    <Route path = "/owned" element = {<YourNFTs/>}/>
    <Route path = "/listed" element = {<ListedNFTs/>}/>
    <Route path = "/admin" element = {<Admin/>}/>


            
          </Routes>
    </div>
  )
}
