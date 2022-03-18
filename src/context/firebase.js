import React from 'react'

// firebase
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC1XneATOIVWAKdDiZtCAuySCVTWDs4UHI",
  authDomain: "anastasiu-tudor.firebaseapp.com",
  databaseURL: "https://anastasiu-tudor-default-rtdb.firebaseio.com",
  projectId: "anastasiu-tudor",
  storageBucket: "anastasiu-tudor.appspot.com",
  messagingSenderId: "991641877615",
  appId: "1:991641877615:web:3244763f3ad121976c219a",
  measurementId: "G-WS0E3NT76Z"
};

const FirebaseContext = React.createContext()

const app = initializeApp(firebaseConfig)
const database = getDatabase(app);


const FirebaseProvider = ({children}) => {

    return  <FirebaseContext.Provider value={{database}}>
            {children}
        </FirebaseContext.Provider>
    
}

export  {FirebaseProvider, FirebaseContext}
