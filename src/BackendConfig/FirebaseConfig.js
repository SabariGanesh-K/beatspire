import React, { useState, createContext } from 'react';
import { initializeApp } from "firebase/app";
export const FirebaseConfig = createContext();

export const FirebaseProvider = ({ children }) => {
    const firebaseBackendConfig = {
        apiKey: "AIzaSyDf5kmh-9jsZAJ8ium3YUoDxsLzICfpFc0",
        authDomain: "beatspire.firebaseapp.com",
        projectId: "beatspire",
        storageBucket: "beatspire.appspot.com",
        messagingSenderId: "674014597869",
        appId: "1:674014597869:web:699fa8e9aa41b0e27972e4",
        measurementId: "G-ERE53GLE6L"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseBackendConfig);

    return (
        <FirebaseConfig.Provider value={{}}>{children}</FirebaseConfig.Provider>
    )

}