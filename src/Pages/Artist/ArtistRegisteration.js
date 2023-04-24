import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { BlockchainConfig } from "../../BackendConfig/BlockchainConfig";
import { FirebaseConfig } from "../../BackendConfig/FirebaseConfig";
import Navbar from "../Landing/components/Navbar";
import styled from "styled-components";
import { FileUpload } from "./components/FileUpload";

const ButCon = styled.button`
  background-color: #00C594;
  padding: 15px;
  margin-top: 30px;
  border-radius: 20px;
  `
const ButCom = styled.button`
  background-color: #00C594;
  padding: 15px;
  margin-top: 30px;
  border-radius: 20px;
  &:hover{
    background-color: black;
    color: #00FFBA;
    transition: 0.3s ease-in-out;
    transform: scale(1.01);
    box-shadow: 0 5px 10px 0 #1E4A3F;
  }`

const Container = styled.div`
background-color: #156F65;
font-family: 'Poppins', sans-serif;
padding: 1rem;
// height: 80vh;
display: flex;
flex-direction: column;
border-radius: 20px;
justify-content: center;
align-items: center;
margin-bottom: 5rem;`

const Section = styled.div`
// height: 100vh;
width: 100%;
scroll-snap-align: center;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
box-sizing: border-box;
background-color: #99FFE3;`

const Container2 = styled.div`
${'' /* height: 100vh; */}
background-color: #99FFE3;
font-family: 'Poppins', sans-serif;
font-size:5rem;
margin: 3rem;
// width: 100vh;
// height: max-content;
// padding: 50px;
line-height: 1.05;`

const Span = styled.div`
box-sizing: border-box;
font-family: 'Poppins', sans-serif;
background-color: #00C594;
padding: 10px;
border-radius: 20px;
color: black;
font-weight: bold;
display: flex;
justify-content: center;
align-items: center;
width: 100vh;

&:hover{
  background-color: #00FFBA;
  transition: 0.3s ease-in-out;
  transform: scale(1.01);
  box-shadow: 0 5px 10px 0 #1E4A3F;
  color: white;
  cursor: pointer;
}`


export const ArtistRegisteration = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [audience, setAudience] = useState("");
  const [spotify, setSpotify] = useState("");
  const [twitter, setTwitter] = useState("");
  const [addingProfileImage, setAddingProfileImage] = useState("");

  const [loading, setloading] = useState("");
  const { addArtistData,artistData } = useContext(FirebaseConfig);
  const { currentAccount,connectWallet } = useContext(BlockchainConfig);
  const handleSubmission = async () => {
    setloading(true);
    await addArtistData(name, mail, audience, spotify, twitter,addingProfileImage);
    setName('')
    setMail('')
    setAudience(0)
    setSpotify("")
    setTwitter("")
    setloading(false);
  };
  console.log(currentAccount)
  return (
    < div className="min-h-screen bg-[#99FFE3]">
      <Section>
      <Navbar />

        <Container2 className="text-2xl font-extrabold">Artist Registeration</Container2>
        {(currentAccount && !artistData.name ) ? (
          <Container>
            {" "}
            <Span className="text-2xl m-5">
              <TextField
                id="standard-textarea"
                value={name}
                onChange={(e) => setName(e.target.value)}
                label=" Name"
                placeholder="name"
                multiline
                variant="standard"
              />
            </Span>
            <br />
            <br />
            <Span className="text-2xl m-5"> <TextField
              id="standard-textarea"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              label=" Mail"
              placeholder="Mail"
              multiline
              variant="standard"
            /></Span>
            <Span className="text-2xl m-5"><TextField
              id="standard-textarea"
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
              label="Target audience"
              placeholder="audience"
              multiline
              variant="standard"
            /></Span>
            <Span className="text-2xl m-5"><TextField
              id="standard-textarea"
              value={spotify}
              onChange={(e) => setSpotify(e.target.value)}
              label=" Spotify"
              placeholder="Spotify handle"
              multiline
              variant="standard"
            /></Span>
            <Span className="text-2xl m-5"><TextField
              id="standard-textarea"
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)}
              label="Twitter"
              placeholder="Twitter handle"
              multiline
              variant="standard"
            /></Span>
          <FileUpload onChange={(file) => setAddingProfileImage(file[0])} />

            {name && mail && audience && spotify && twitter &&addingProfileImage &&!loading ? (
              <ButCom
                className="bg-black text-white font-bold text-2xl"
                onClick={handleSubmission}
              >
                Submit
              </ButCom>
            ) : (
              <ButCon
                className="font-bold text-2xl cursor-not-allowed"
                // onClick={handleSubmission}
              >
                Submit
              </ButCon>
            )}
          </Container>
        ) : (artistData.name ?<a href = "/artist"> <ButCom>USER ALREADY REGISTERED</ButCom></a>: <ButCom onClick={connectWallet}>Connect wallet to proceed</ButCom>  )     }
      </Section>
    </div>
  );
};
