import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
justify-content: center;
align-items: center;
box-sizing: border-box;`

const Img = styled.img`
width: 400px;
height: 400px;
${'' /* rotate: 20deg; */}
&:hover{
    transition: 0.2s ease-in-out;
    transform: scale(1.1);
    rotate: 5deg;
    cursor: pointer;
}
`
const Container = styled.div`
box-sizing: border-box;
width: 100%;
${'' /* border: 1px solid black; */}
margin: 20rem;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;`

const Left = styled.div`
${'' /* border: 1px solid black; */}
margin:20px;
`

const Right = styled.div`
${'' /* border: 1px solid black; */}
margin: 20px;
`
const Header = styled.h1`
color: #5A199C;
font-family: Poppins;
font-weight: 800;
font-size: 6rem;
line-height: 6rem;
`
const TagLine = styled.p`
color: #540072;`

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
const ButCon = styled.div`
display: flex;
justify-content: flex-start;
margin: 20px 0px;
`

const SellNfts = () => {
    return (
        <Section>
            <Container>
                <Left>
                    <Header>Sell your
                        <br /> NFTs</Header>
                    <TagLine>Monetize your music and trade rare, one-of-a-kind <br /> NFTs on our secure music NFT marketplace</TagLine>
                    <ButCon><Button>I'm An Artist</Button></ButCon>
                </Left>
                <Right>
                    <Img src='./sellnftcard.svg' />
                </Right>
            </Container>
        </Section>
    )
}

export default SellNfts