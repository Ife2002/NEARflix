import React, { createContext, useState, useContext } from "react";
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './pages/Home'
import PopUp from './components/PopUp'
import Signup from './pages/Signup'
import Row from './components/Row'
import CryptoJS from 'crypto-js';
import Movie from './components/Movie'
import { login } from "./utils/near";
import Wallet from "./components/Wallet";

//export const useCloseContext = () => useContext(CloseContext);

function App() {
 // const [close, setClose] = useState(false)
  
  //let ciphertext = CryptoJS.AES.encrypt('my message wow', 'password').toString()
 // let bytes  = CryptoJS.AES.decrypt(ciphertext, 'password');
 // let originalText = bytes.toString(CryptoJS.enc.Utf8);

  return (  
    <div className="bg-white min-h-screen h-[100%] w-[100%]">
    <Wallet />

    </div>
    )
}

export default App
