import React, { useState, createContext } from 'react';
export const FirebaseConfig = createContext();

export const FirebaseProvider = ({ children }) => {


    return (
        <FirebaseConfig.Provider value={{}}>{children}</FirebaseConfig.Provider>
    )

}