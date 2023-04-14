import React, { useState, createContext, useEffect, useContext } from 'react';
import { initializeApp} from "firebase/app";
import { BlockchainConfig } from './BlockchainConfig';
import { addDoc, collection, doc, getDocs, getFirestore, query, setDoc, where } from "firebase/firestore";

export const FirebaseConfig = createContext();

export const FirebaseProvider = ({ children }) => {
  const {currentAccount}  = useContext(BlockchainConfig)
  const [artistData, setArtistData] = useState([])
  const [userLoading, setuserLoading] = useState(true)
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
      const   db = getFirestore(app);
useEffect(() => {
  const getArtistDataFromDB = async() =>{
    if (currentAccount.length>0){
      console.log(currentAccount)
  const artistSnapshot = query(collection(db,"artists"),where("wallet","==",currentAccount));
  let artistDataFetched = await getDocs(artistSnapshot)
  // console.log("yes",currentAccount,artistDataFetched.docs[0].data())
    if(!artistDataFetched.empty){
      setArtistData(artistDataFetched.docs[0].data())
        // console.log()
    }
  }
    setuserLoading(false)
  }

  getArtistDataFromDB()
  }, [currentAccount,db])

  const getMoodDatas = async(mood) =>{
    let l=[];
    const ref = collection(db,mood)
    const data = await getDocs(ref) 
    data.docs.forEach((item)=>{
      l.push(item.data().tokenURI)
    })
    return l;
  }

  const addArtistData = async(name,mail,audience,spotify,twitter) =>{
   await setDoc(doc(db,"artists",currentAccount),{
    name:name,
    mail:mail,
    audience:audience,
    spotify:spotify,
    twitter:twitter,
    wallet:currentAccount.toLowerCase()
   });
    
  }

  const uploadArtOffChain = async(tokenURI,mood1,mood2,mood3) =>{
    await addDoc(collection(db,mood1),{tokenURI:tokenURI})
    await addDoc(collection(db,mood2),{tokenURI:tokenURI})
    await addDoc(collection(db,mood3),{tokenURI:tokenURI})

  }
  



    return (
        <FirebaseConfig.Provider value={{artistData,userLoading,getMoodDatas,uploadArtOffChain,addArtistData}}>{children}</FirebaseConfig.Provider>
    )

}