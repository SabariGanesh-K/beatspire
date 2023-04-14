
import React, { useContext, useState } from "react";
import { BlockchainConfig } from "../../BackendConfig/BlockchainConfig";
import { FirebaseConfig } from "../../BackendConfig/FirebaseConfig";
import Navbar from "../Actors/NavBar";
export const ArtistProfile = () => {
    const { artistData } = useContext(FirebaseConfig);
    const { currentAccount } = useContext(BlockchainConfig);    
  return (
    <div>
        <Navbar/>
    <div>ArtistProfile</div>
{currentAccount? <>
{(artistData)?<>

<div className="flex flex-col">
    <span>Name: {artistData.name} </span>
    <span>Mail: {artistData.mail} </span>
    <span>wallet: {artistData.wallet} </span>
    <span>audience: {artistData.audience} </span>
    <span>Twitter: {artistData.twitter} </span>

</div>

</>:  <div>Register as a artist to proceed</div> }


</>:<div>Connect your wallet to proceed</div>}
    </div>

  )
}
