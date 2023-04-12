import React, { useState, createContext, useEffect } from 'react';
import { initializeApp } from "firebase/app";
export const FirebaseConfig = createContext();

export const FirebaseProvider = ({ children }) => {
    const firebaseBackendConfig = {
        apiKey: process.env.REACT_APP_APIKEY ,
        authDomain: "beatspire.firebaseapp.com",
        projectId: "beatspire",
        storageBucket: "beatspire.appspot.com",
        messagingSenderId: "674014597869",
        appId: "1:674014597869:web:699fa8e9aa41b0e27972e4",
        measurementId: "G-ERE53GLE6L"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseBackendConfig);
useEffect(() => {
  console.log(firebaseBackendConfig.apiKey)

 
}, [])

    return (
        <FirebaseConfig.Provider value={{}}>{children}</FirebaseConfig.Provider>
    )

}