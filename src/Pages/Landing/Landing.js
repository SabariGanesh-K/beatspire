import React from 'react'
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import CreateNft from './components/CreateNft';
import SellNfts from './components/SellNfts';
import TopArtists from './components/TopArtists';
import TopNfts from './components/TopNfts';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body{
  ${'' /* margin: 0; */}
  font-family: 'Open Sans', sans-serif;
  font-family: 'Poppins', sans-serif;
}`

const Container = styled.div`
height: 100vh;
background-color: #000;
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
overflow-y: auto;
color: black;
background-color: #99FFE3;
scrollbar-width: none;
&::-webkit-scrollbar {
  display: none;
}`

const Landing = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Navbar />
        <Hero />
        <TopNfts />
        <SellNfts />
        <CreateNft />
        <TopArtists />
      </Container>
    </>

  );
}

export default Landing
