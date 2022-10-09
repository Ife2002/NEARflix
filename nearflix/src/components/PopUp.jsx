import React,{useState, useContext} from 'react'
//import test from '../assets/test'
import Image from '../assets/pp.jpg'
import Near from '../assets/near.svg'
import Cancel from '../assets/x.svg'
import Like from '../assets/like.svg'
import Unlike from '../assets/unlike.svg'
import Likefill from '../assets/lfill.svg'
import Unlikefill from '../assets/ufill.svg'
import { ItemContext } from './Movie'





function PopUp({ item, id, image, props, title,close, overview, release_date }) {
   const [like, setLike] = useState(true)
   const [unlike, setUnlike] = useState(true)
   
   console.log(item)

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
         <button className='bg-black text-white text-[0.6rem] py-[0.3%] flex flex-row items-center rounded-[7px] pr-[2.5%]'>
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