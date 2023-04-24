import React, { useState, createContext, useEffect, useContext } from 'react';
import { initializeApp} from "firebase/app";
import { BlockchainConfig } from './BlockchainConfig';
import { addDoc, collection, doc, getDocs, getFirestore, query, setDoc, where } from "firebase/firestore";
import { ref, uploadBytesResumable, deleteObject, getStorage } from "firebase/storage";
import { getDownloadURL } from "firebase/storage";

export const FirebaseConfig = createContext();

export const FirebaseProvider = ({ children }) => {
  const {currentAccount}  = useContext(BlockchainConfig)
  const [artistData, setArtistData] = useState([])
  const [UserAdmin, setUserAdmin] = useState(false)
  const [userLoading, setuserLoading] = useState(true)
  const [PendingVerifications, setPendingVerifications] = useState([])
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
 const storage = getStorage(app);

      
  const fetchPendingVerifications = async() =>{
    const artistSnapshot = query(collection(db,"artists"),where("verified","==",false));
    let artistDataFetched = await getDocs(artistSnapshot)
      let dat =  artistDataFetched.docs;
      let res = []
      dat.forEach((item)=>{
        res.push(item.data())
      })
      console.log(res,dat)
      return res;
    }
  
    const checkAdmin = async() =>{
      if(currentAccount){
        const artistSnapshot = query(collection(db,"admins"),where("wallet","==",currentAccount));
        let artistDataFetched = await getDocs(artistSnapshot)
        if (artistDataFetched.empty){
          return false;
        }
        else{
          return true
        }
      }
      else{
        return false
      }
     
    
    }
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
  const fetchPendingVerifications = async() =>{
    const artistSnapshot = query(collection(db,"artists"),where("verified","==",false));
    let artistDataFetched = await getDocs(artistSnapshot)
      let dat =  artistDataFetched.docs;
      let res = []
      dat.forEach((item)=>{
        res.push(item.data())
      })
      console.log(res,dat)
      return res;
    }
  
    const checkAdmin = async() =>{
      if(currentAccount){
        const artistSnapshot = query(collection(db,"admins"),where("wallet","==",currentAccount));
        let artistDataFetched = await getDocs(artistSnapshot)
        if (artistDataFetched.empty){
          return false;
        }
        else{
          return true
        }
      }
      else{
        return false
      }
     
    
    }
  const adminSet = async() =>{
    const res = await checkAdmin(currentAccount)
    setUserAdmin(res)
  const pendingVer = await fetchPendingVerifications()
  setPendingVerifications(pendingVer)
  console.log(pendingVer)
  }

  getArtistDataFromDB()
  adminSet()
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
  const adminSet = async() =>{
    const res = await checkAdmin(currentAccount)
    setUserAdmin(res)
  const pendingVer = await fetchPendingVerifications()
  setPendingVerifications(pendingVer)
  console.log(pendingVer)
  }
  const addImage = async (regno, file) => {
    const fileName = `images/${regno}`;

    const storageRef = ref(storage, fileName);

    uploadBytesResumable(storageRef, file);

    return fileName;
  };

   const getImage = async (path) => {
    const starsRef = ref(storage, path);
    return await getDownloadURL(starsRef);
  };
  

  const addArtistData = async(name,mail,audience,spotify,twitter,addingProfileImage) =>{
    const fileName = await addImage(currentAccount, addingProfileImage);
    const imgSrc =await getImage(fileName)
    await setDoc(doc(db,"artists",currentAccount),{
    name:name,
    mail:mail,
    audience:audience,
    spotify:spotify,
    twitter:twitter,
    txScrShot:imgSrc,
    verified:false,
    wallet:currentAccount.toLowerCase()
   });
    
  }

  const verifyArtist = async(artistWallet) =>{
    await setDoc(doc(db,"artists",artistWallet),{verified:true},{merge:true})
    await adminSet()
  }


  const uploadArtOffChain = async(tokenURI,mood1,mood2,mood3) =>{
    await addDoc(collection(db,mood1),{tokenURI:tokenURI})
    await addDoc(collection(db,mood2),{tokenURI:tokenURI})
    await addDoc(collection(db,mood3),{tokenURI:tokenURI})

  }
  



    return (
        <FirebaseConfig.Provider value={{artistData,userLoading,getMoodDatas,checkAdmin,UserAdmin,verifyArtist,PendingVerifications,fetchPendingVerifications,uploadArtOffChain,addArtistData}}>{children}</FirebaseConfig.Provider>
    )

}