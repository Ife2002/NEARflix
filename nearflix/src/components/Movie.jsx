import React, { useState, createContext, useContext } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { AnimatePresence, motion } from "framer-motion";
import PopUp from './PopUp';
import Overlay from './Overlay';
import Home from '../pages/Home';


//import { UserAuth } from '../context/AuthContext'
//import { db } from '../firebase'
//import { arrayUnion, doc, updateDoc } from 'firebase/firestore';


export const ItemContext = createContext();

const Movie = ({ item, id, pop}) => {

  const [expand, setExpand] = useState(false)
  const [shade, setShade] = useState(false)
  const [close, setClose] = useState(false)
  
  


  const handleexpand =()=> {
   return (
     setExpand(!expand)
   )
  }


  const unshade =()=>{
    return(
      setShade('bg-black/80')
    )
  }

  //const { user } = UserAuth()

 // const movieID = doc(db, 'users', `${user?.email}`);

  /*const saveShow = async () => {
    if(user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert('Unable to save movie')
    }
  }*/

  return (
    <>
    <motion.div className='w-[160px] sm:w-[200px] h-full  md:w-[240px] lg:w-[280px] border-white border-2px inline-block cursor-pointer relative z-5 p-2 hover:mx-[3%] hover:my-[6%]' whileHover={{ scale: 1.2 }} onClick={pop} onMouseEnter={() => setExpand(true)} onMouseLeave={()=>setExpand(false)}>
    <div className='h-[100%] w-[100%] flex items-center flex-col '>
    <img className='w-[100%] h-auto  hover:rounded-t-[14px]' src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`} alt={item?.title}  />
    <div className={`absolute  top-0 left-0 w-full h-[100%] hover:${unshade} opacity-0 hover:opacity-100 text-white`}>
      {expand? null : <p className='white-space-normal text-xs  md:text-sm font-bold flex justify-center items-center h-full text-center'>{''}</p>}
    </div>
    </div>
    </motion.div>
    {close? <Overlay> <PopUp key={id} item={item} movietitle={item.title} close={() => setClose(!close)} overview={item?.overview}/> </Overlay> : null}
      </>  
  
  )
}

export default Movie