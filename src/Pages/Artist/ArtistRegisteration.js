import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { BlockchainConfig } from "../../BackendConfig/BlockchainConfig";
import { FirebaseConfig } from "../../BackendConfig/FirebaseConfig";
import Navbar from "../Actors/NavBar";

export const ArtistRegisteration = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [audience, setAudience] = useState("");
  const [spotify, setSpotify] = useState("");
  const [twitter, setTwitter] = useState("");

  const [loading, setloading] = useState("");
  const { addArtistData } = useContext(FirebaseConfig);
  const { currentAccount } = useContext(BlockchainConfig);
  const handleSubmission = async () => {
    setloading(true);
    await addArtistData(name, mail, audience, spotify, twitter);
    setloading(false);
  };
console.log(currentAccount)
  return (
    <>
         <Navbar/>
      <div>ArtistRegisteration</div>
      {currentAccount ? (
        <>
          {" "}
          <TextField
            id="standard-textarea"
            value={name}
            onChange={(e) => setName(e.target.value)}
            label=" Name"
            placeholder="name"
            multiline
            variant="standard"
          />
          <br />
          <br />
          <TextField
            id="standard-textarea"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            label=" Mail"
            placeholder="Mail"
            multiline
            variant="standard"
          />
          <br />
          <br />
          <TextField
            id="standard-textarea"
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
            label="Target audience"
            placeholder="audience"
            multiline
            variant="standard"
          />
          <br />
          <br />
          <TextField
            id="standard-textarea"
            value={spotify}
            onChange={(e) => setSpotify(e.target.value)}
            label=" Spotify"
            placeholder="Spotify handle"
            multiline
            variant="standard"
          />
          <br />
          <br />
          <TextField
            id="standard-textarea"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
            label="Twitter"
            placeholder="Twitter handle"
            multiline
            variant="standard"
          />
          <br />
          <br />
          {name && mail && audience && spotify && twitter ? (
            <Button
              className="bg-black text-white font-bold text-2xl"
              onClick={handleSubmission}
            >
              SUBMIT
            </Button>
          ) : (
            <Button
              className="bg-gray-700 text-black font-bold text-2xl cursor-not-allowed"
              onClick={handleSubmission}
            >
              SUBMIT
            </Button>
          )}
        </>
      ): <div>Conect wallet to proceed</div> }
    </>
  );
};
