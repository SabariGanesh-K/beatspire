import React, { useState, useMemo, useCallback, useContext } from 'react';

import { useDropzone } from 'react-dropzone';


import Button from '../Actors/components/Button'
import Input from '../Actors/components/Input'
import '../../home.module.css'
import { BlockchainConfig } from '../../BackendConfig/BlockchainConfig';
import Navbar from '../Actors/NavBar';

const CreateNFT = () => {
  const [fileUrl, setFileUrl] = useState('');

  const [formInput, setFormInput] = useState({
    price: '',
    name: '',
    description: '',
  });

  const { uploadToIPFS, createNFT } = useContext(BlockchainConfig);
 
  const onDrop = useCallback(async (acceptedFile) => {
    const url = await uploadToIPFS(acceptedFile[0]);
    console.log({ url });
    setFileUrl(url.replace("ipfs://","https://ipfs.io/ipfs/"));
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: 'image/*',
    maxSize: 50000000,
  });

  const fileStyle = useMemo(
    () => `dark:bg-nft-black-1 bg-white border dark:border-white border-nft-gray-2 flex flex-col items-center p-5 rounded-sm border-dashed 
        ${isDragActive && 'border-file-active'} 
        ${isDragAccept && 'border-file-accept'}
        ${isDragReject && 'border-file-reject'}
      `,
    [isDragActive, isDragAccept, isDragReject],
  );

  return (
    <div className="flex justify-center sm:px-4 p-12">
        <Navbar/>
        <div className='bg-red'>Hi</div>
      <div className="w-3/5 md:w-full">
        <h1 className="font-poppins  dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4 sm:mb-4">
          Create New NFT
        </h1>
        <div className="mt-16">
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">
            Upload files
          </p>
          <div className="mt-4">
            <div {...getRootProps()} className={fileStyle}>
              <input {...getInputProps()} />
              <div className="flexCenter flex-col text-center">
                <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">
                  JPG, GIF, SVG, WEBM Mx 100mb.
                </p>
                <div className="my-12 w-full flex justify-center">
             
                </div>
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
          </div>
        </div>
        <Input
          inputType="input"
          title="Name"
          placeholder="NFT Name"
          handleClick={(e) => setFormInput({ ...formInput, name: e.target.value })}
        />
        <Input
          inputType="textarea"
          title="Desciption"
          placeholder="Description of your NFT"
          handleClick={(e) => setFormInput({ ...formInput, description: e.target.value })}
        />
        <Input
          inputType="number"
          title="Price"
          placeholder="Enter Price"
          handleClick={(e) => setFormInput({ ...formInput, price: e.target.value })}
        />
        <div className="mt-7 w-full flex justify-end">
          <Button
            btnName="Create NFT"
            className="rounded-xl"
            handleClick={() => createNFT(formInput, fileUrl)}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateNFT;
