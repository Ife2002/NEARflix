import React, { useEffect, useState, useCallback, useContext } from "react";
//import test from '../assets/test'
import {parse, stringify, toJSON, fromJSON} from 'flatted';
import Image from '../assets/pp.jpg'
import Near from '../assets/near.svg'
import Cancel from '../assets/x.svg'
import Like from '../assets/like.svg'
import Unlike from '../assets/unlike.svg'
import Likefill from '../assets/lfill.svg'
import Unlikefill from '../assets/ufill.svg'
import CryptoJS, { x64 } from 'crypto-js';
import { getMovies, buyMovie } from "./../utils/marketplace";
import * as buffer from 'buffer';
import { initializeContract } from "../utils/near";
(window).Buffer = buffer.Buffer;




function PopUp({ item, props, title,close,  release_date }) {

   const account = window.walletConnection.account();
   const GAS = 100000000000000;

   const [like, setLike] = useState(true)
   const [unlike, setUnlike] = useState(true)
   const [loading, setLoading] = useState(true);


   // all the work as regard the adding to database and buying is supposed to be done here

   //I moved the this function from marketplace.js to check if the error was due to local state
  // here am trying to add the current state of values in the popUp to the contract
  function setMovie() {
    const account = window.walletConnection.account();
    
    const movie ={
      id : `${item.id}`,
      name : CryptoJS.AES.encrypt(`${item.title}`, 'password').toString(),
      overview : CryptoJS.AES.encrypt(`${item.overview}`, 'password').toString(),
      image: CryptoJS.AES.encrypt(`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`, 'password').toString(),
      price: 1000000000000000000000000,
     }
   
     // this is the contract call function
    //these are the arguments
    return window.contract.setMovie({ movie }, GAS); 
  }

// ignore this
// const handlebuy = async (id, price) => {

//   setMovie();
//   try {
//     await buyMovie({
//     id,
//     price
//     })
//     console.log('Movie bought sucessfully')
//   } catch (error) {
//     console.log(error);
//   } finally {
//     setLoading(false);
//   }
// };
 
// here im tryin to see if I can add the movie to the contract without  buying it
   const handlebuy = async (id, price) => {

    try {
      await setMovie();
      console.log('Movie added sucessfully')
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
   
  
 


   const togglelike =()=>{
    setLike(!like)
   }
   const toggleunlike =()=>{
    setUnlike(!unlike)
   }

  const Icon =(props)=>{
    return(
      <>
      <button className='border-[1px] border-[#ffffff85] ml-[3%] rounded-[50%] bg-none h-[25px] w-[25px] flex relative items-center justify-center' 
      onClick={props.onClick}>
        {props.state?
      (<img src={props.src} className='h-[12px] w-[12px]' /> ) : (<img src={props.src2} className='h-[12px] w-[12px]' />)}
      </button>
      
      </>
    )
  }

  useEffect(() => {
    getMovies();
    
   }, []);

  

  return (
      
        <div className='bg-[#ffffff00] h-[100%] w-[100%] text-black flex whitespace-pre-wrap'>
      
      <div className='px-[5%] text-white bg-[#2E2E2E] w-[100%] h-full pb-[5%] pt-[3%]' onClick={close}>
        
      <h2 className='text-[0.9rem] pr-[50%] text-left'>{item.title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} classname='w-[100%] h-full '/>
      <p>{release_date}</p>
      <p className='mt-[4%] text-[0.6rem] text-left'>{item?.overview}</p>
      <div className='flex w-[100%] flex-row items-center mt-[5%]'>
         <button className='bg-black text-white text-[0.6rem] py-[0.3%] flex flex-row items-center rounded-[7px] pr-[2.5%]' onClick={handlebuy}>
          <img src={Near} className='h-[20px] w-[20px] mt-[6%]'/><p>
          Buy for 1 NEAR</p></button>
          <Icon state={like} onClick={togglelike} src={Like} src2={Likefill}/>
          <Icon state={unlike} onClick={toggleunlike} src={Unlike} src2={Unlikefill}/>
      </div>
      </div>
      </div>
    
  )
}

export default PopUp