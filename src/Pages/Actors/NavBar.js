import React, { useContext } from 'react'
import styled from 'styled-components'
import { BlockchainConfig } from '../../BackendConfig/BlockchainConfig'
const Section = styled.div`
display: flex;
justify-content: center;
`
const Container = styled.div`
 width: max-content;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 20px 0;
`
const Links = styled.div`
 display: flex;
 align-items: center;
 gap: 200px;
 ${'' /* border: 1px solid black; */}
`
const Logo = styled.img`
  width: 40px;
  &:hover{
    transition: 0.1s ease-in-out;
    transform: scale(1.05);
    cursor: pointer;
  }
`
const List = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  list-style: none;
  font-weight: normal;
  font-family: Poppins;
  ${'' /* border: 1px solid black; */}
  margin: 0 10rem;
`
const ListItem = styled.li`
  cursor:pointer;
  &:hover {
    transition: 0.2s ease-in-out;
    transform: scale(1.1);
    color: #7E10A4;
    ${'' /* font-weight: bolder; */}
  }
`
const Icon = styled.img`
  cursor: pointer;
  width: 20px;
`
const Icons = styled.div`
 display: flex;
 align-items: center;
 gap: 20px;
 padding: 0px 40px 0px 40px;
  ${'' /* border: 1px solid black; */}
`
const Button = styled.button`
  cursor: pointer;
  background-color: #540072;
  color: #00FFBA;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  font-weight: normal;
  font-family: Poppins;
  &:hover{
    transition: 0.2s ease-in-out;
    transform: scale(1.1);
    background-color: #00B78A;
    color: black;
  }
`

const Navbar = () => {
  const { connectWallet, currentAccount } = useContext(BlockchainConfig);

  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./beatspire-logo.svg" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Music</ListItem>
            <ListItem>Artists</ListItem>
            <ListItem>Collections</ListItem>
            {/* <ListItem>Social Good</ListItem> */}
          </List>
        </Links>
        <Icons>
       { currentAccount ? (
    <div className="flexCenter">
      <Button>Connected</Button>
    </div>
  ) : (
    <Button
    
      handleClick={connectWallet}
    >Connect Wallet</Button>
  )}
          <Button>Explore</Button>
        </Icons>
      </Container>
    </Section>
  )
}

export default Navbar