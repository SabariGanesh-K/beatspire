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
rotate: 20deg;
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
color: #156F65;
font-family: Poppins;
font-weight: 800;
font-size: 6rem;
line-height: 5.5rem;
`
const TagLine = styled.p`
color: #540072;`
const Hero = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Header>Experience Music<br />
            And NFTs like<br />
            Never before</Header>
          <TagLine>Step into the world of music NFTs and immerse yourself in a <br /> Revolutionary new way to experience and collect music.</TagLine>
        </Left>
        <Right>
          <Img src='./headset.svg' />
        </Right>
      </Container>
    </Section>
  )
}

export default Hero