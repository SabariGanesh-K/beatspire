import React, { useState, createContext } from 'react';
export const BlockchainConfig = createContext();

export const BlockchainProvider = ({ children }) => {


    return (
        <BlockchainConfig.Provider value={{}}>{children}</BlockchainConfig.Provider>
    )

}