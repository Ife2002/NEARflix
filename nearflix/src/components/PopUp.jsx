import React, { useEffect, useState, useCallback, useContext } from "react";
//import test from '../assets/test'
import Image from '../assets/pp.jpg'
import Near from '../assets/near.svg'
import Cancel from '../assets/x.svg'
import Like from '../assets/like.svg'
import Unlike from '../assets/unlike.svg'
import Likefill from '../assets/lfill.svg'
import Unlikefill from '../assets/ufill.svg'
import CryptoJS from 'crypto-js';
import { getMovies, buyMovie, setMovie } from "./../utils/marketplace";
import * as buffer from 'buffer';
(window).Buffer = buffer.Buffer;




function PopUp({ item, props, title,close,  release_date }) {
   const [like, setLike] = useState(true)
   const [unlike, setUnlike] = useState(true)
   //const [allmovie, setAllmovie] = useState([])
   const [loading, setLoading] = useState(true);
   const [id, setId] = useState(`${item.id}`)
   const [name, setName] = useState(CryptoJS.AES.encrypt(`${item.title}`, 'password').toString())
   const [overview, setOverview] = useState(CryptoJS.AES.encrypt(`${item.overview}`, 'password').toString())
   const [image, setImage] = useState(CryptoJS.AES.encrypt(`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`, 'password').toString())
   const [price, setPrice] = useState(1000000000000000000000000)

  //  const clikedMovie ={
  //   id : item.id,
  //   name : CryptoJS.AES.encrypt(`${item.title}`, 'password').toString(),
  //   overview : CryptoJS.AES.encrypt(`${item.overview}`, 'password').toString(),
  //   image: CryptoJS.AES.encrypt(`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`, 'password').toString(),
  //   price: 1000000000000000000000000,
  //  }
  //  console.log(clikedMovie)
  const movies = {id,name,overview,image,price}

  useEffect(() => {
   getMovies();
   
  }, []);

  async function addMovie() {
    console.log(name, image);
    try {
        await setMovie({id, name, overview, image, price});
        const Allmovies = getMovies();
        console.log(Allmovies)
        console.log('added sucessfully')
    } catch (error) {
        console.log(error);
    }
}

  //  const addMovie = async (data) => {
  //   console.log(id,name,overview,image,price)
  //   try {
  //     setLoading(true);
  //     setMovie(data).then((resp) => {
  //       getProducts();
  //     });
  //     console.log ("Product added successfully.");
  //   } catch (error) {
  //     console.log({ error });
  //     console.log("Failed to create a product.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

   const handlebuy = async (id, price) => {

    try{
    addMovie()
    console.log('ran added function')

    } catch (error){
     console.log('failed to add')
    };
    try {
      await buyProduct({
      id,
      price
      })
      console.log('Movie bought sucessfully')
    } catch (error) {
      console.log("Failed to purchase product.");
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