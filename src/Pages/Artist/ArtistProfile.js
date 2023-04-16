import React, { useContext, useState } from "react";
import { BlockchainConfig } from "../../BackendConfig/BlockchainConfig";
import { FirebaseConfig } from "../../BackendConfig/FirebaseConfig";
import Navbar from '../Landing/components/Navbar';

import styled from "styled-components";

const Section = styled.div`
// height: 100vh;
scroll-snap-align: center;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
box-sizing: border-box;
background-color: #99FFE3;`

const Container = styled.div`
background-color: #156F65;
font-family: 'Poppins', sans-serif;
padding: 5rem;
height: 80vh;
display: flex;
border-radius: 20px;
justify-content: center;
align-items: center;`

const Container2 = styled.div`
${'' /* height: 100vh; */}
background-color: #99FFE3;
font-family: 'Poppins', sans-serif;
font-size:5rem;
margin: 3rem;
width: 100%;
height: max-content;`

const Span = styled.div`
box-sizing: border-box;
font-family: 'Poppins', sans-serif;
background-color: #00C594;
padding: 30px;
border-radius: 20px;
color: black;
font-weight: bold;
display: flex;
justify-content: center;
align-items: center;

&:hover{
  background-color: #260B41;
  transition: 0.3s ease-in-out;
  transform: scale(1.01);
  box-shadow: 0 5px 10px 0 #1E4A3F;
  color: #00FFBA;
  cursor: pointer;
}`
export const ArtistProfile = () => {
  const { artistData } = useContext(FirebaseConfig);
  const { currentAccount,connectWallet } = useContext(BlockchainConfig);
  return (
    <>
      <Section>
      <Navbar />

        <Container2 className="text-2xl font-extrabold">Artist  Profile</Container2>

        <br/><br/><br/>
        <br/><br/><br/>
        {(currentAccount ) ? <>
          {(artistData.name) ? <>
            <a href="/create"> <Span className="text-2xl m-5">+ Upload your NFT </Span></a><br />

            <Container className="flex flex-col rounded-b-lg shadow-md">
              <Span className="text-2xl m-5">Name: {artistData.name} </Span><br />
              <Span className="text-2xl m-5">Mail: {artistData.mail} </Span><br />
              <Span className="text-2xl m-5">wallet: <br />{artistData.wallet} </Span><br />
              <Span className="text-2xl m-5">audience: {artistData.audience} </Span><br />
              <Span className="text-2xl m-5">Twitter: {artistData.twitter} </Span>

            </Container>

          </> : <a href = "regartist"> <Span> Register as a artist to proceed </Span></a>}


        </> : <Span onClick={connectWallet}>Connect your wallet to proceed</Span>}
      </Section>
    </>
  )
}
