import React, { useState, useMemo, useCallback, useContext } from "react";

import { useDropzone } from "react-dropzone";

import styled from "styled-components";
import Button from "../Actors/components/Button";
import Input from "../Actors/components/Input";
import "../../home.module.css";
import { BlockchainConfig } from "../../BackendConfig/BlockchainConfig";
import Navbar from "../Landing/components/Navbar";
import { FirebaseConfig } from "../../BackendConfig/FirebaseConfig";

const Body = styled.div`
  background-color: #99ffe3;
`;

const Card = styled.div`
  &:hover {
    border-radius: 10px;
    border: 10px solid #d0fff2;
    ${"" /* padding: 0.5rem; */}
    transition: 0.2s ease-in-out;
    transform: scale(1.01);
  }
`;

const ButCom = styled.button`
  background-color: #00c594;
  padding: 15px;
  margin-top: 30px;
  border-radius: 20px;
  font-family: Poppins;
  &:hover {
    background-color: black;
    color: #00ffba;
    transition: 0.3s ease-in-out;
    transform: scale(1.01);
    box-shadow: 0 5px 10px 0 #1e4a3f;
  }
`;

const CreateNFT = () => {
  const [fileUrl, setFileUrl] = useState("");

  const [formInput, setFormInput] = useState({
    price: "",
    name: "",
    description: "",
    mood1: "happy",
    mood2: "sad",
    mood3: "angry",
  });

  const { uploadToIPFS, createNFT } = useContext(BlockchainConfig);
  const { uploadArtOffChain } = useContext(FirebaseConfig);
  const [uploadLoading, setUploadLoading] = useState(false);
  const onDrop = useCallback(async (acceptedFile) => {
    console.log(acceptedFile[0].type);
    if (
      acceptedFile[0].type === "video/webm" ||
      acceptedFile[0].type === "audio/mpeg"
    ) {
      const url = await uploadToIPFS(acceptedFile[0]);
      console.log({ url });
      setFileUrl(url.replace("ipfs://", "https://ipfs.io/ipfs/"));
    } else {
      alert("only audio file");
    }
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 50000000,
  });
  const handleCreation = async () => {
    setUploadLoading(true);
    const urlReturned = await createNFT(formInput, fileUrl);
    await uploadArtOffChain(
      urlReturned,
      formInput.mood1,
      formInput.mood2,
      formInput.mood3
    );
    setUploadLoading(false);
  };

  const fileStyle = useMemo(
    () => `dark:bg-nft-black-1 bg-white border dark:border-white border-nft-gray-2 flex flex-col items-center p-5 rounded-sm border-dashed 
        ${isDragActive && "border-file-active"} 
        ${isDragAccept && "border-file-accept"}
        ${isDragReject && "border-file-reject"}
      `,
    [isDragActive, isDragAccept, isDragReject]
  );

  return (
    <>
      <div className="bg-[#99FFE3]">
        <Navbar />
      </div>

      <Body className="flex justify-center sm:px-4 p-12">
        {/* <div className='bg-red'>Hi</div> */}
        <div className="w-3/5 md:w-full">
          <h1 className="font-poppins  dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-extrabold ml-4 sm:mb-4">
            Create New NFT
          </h1>
          {/* <audio controls>
      <source   src = "https://ipfs.io/ipfs/bafybeid5gljppqk6ti3eb2x7mbvgjghafe4xyugabapb7yyiis2bnhnkzq/y2mate.com%20-%20Sickick%20Infected%20Ringtone%20%20New%20Ringtone%202022%20%20Attitude%20BGM%20Ringtone%20%20Ringtones%20Addict%20.mp3"  type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio> */}
          <div className="mt-16">
            <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">
              Upload files
            </p>
            <Card className="mt-4">
              <div {...getRootProps()} className={fileStyle}>
                <input {...getInputProps()} />
                <div className="flexCenter flex-col text-center">
                  <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">
                    Audio files
                  </p>
                  <div className="my-12 w-full flex justify-center"></div>
                  <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-sm">
                    Drag and Drop File
                  </p>
                  <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl mt-2">
                    or Browse media on your device
                  </p>
                </div>
              </div>
              {fileUrl && (
                <aside>
                  <div>
                    <img src={fileUrl} alt="asset_file" />
                  </div>
                </aside>
              )}
            </Card>
          </div>
          <Input
            inputType="input"
            title="Name"
            placeholder="NFT Name"
            handleClick={(e) =>
              setFormInput({ ...formInput, name: e.target.value })
            }
          />
          <Input
            inputType="textarea"
            title="Desciption"
            placeholder="Description of your NFT"
            handleClick={(e) =>
              setFormInput({ ...formInput, description: e.target.value })
            }
          />
          <Input
            inputType="number"
            title="Price"
            placeholder="Enter Price"
            handleClick={(e) =>
              setFormInput({ ...formInput, price: e.target.value })
            }
          />
          <Input
            inputType="textarea"
            title=" Mood #1"
            placeholder="Mood #1"
            handleClick={(e) =>
              setFormInput({ ...formInput, mood1: e.target.value })
            }
          />
          <Input
            inputType="textarea"
            title=" Mood #2"
            placeholder="Mood #2"
            handleClick={(e) =>
              setFormInput({ ...formInput, mood2: e.target.value })
            }
          />
          <Input
            inputType="textarea"
            title=" Mood #3"
            placeholder="Mood #3"
            handleClick={(e) =>
              setFormInput({ ...formInput, mood3: e.target.value })
            }
          />
          <div className="mt-7 w-full flex justify-end">
            {uploadLoading ? (
              <div>Uploading.. </div>
            ) : (
              <Button
                btnName="Create NFT"
                className="rounded-xl"
                handleClick={handleCreation}
              >
                Create NFT
              </Button>
            )}
          </div>
        </div>
      </Body>
    </>
  );
};

export default CreateNFT;
