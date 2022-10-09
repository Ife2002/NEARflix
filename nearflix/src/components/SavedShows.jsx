import React, { useState, useEffect } from 'react'

//import { getProducts } from "./utils/marketplace";

const SavedShows = () => {
  const [movies, setMovies] = useState([])


  const deleteShow = async (passedID) => {
    try {
      const result = movies.filter((item) => item.id !== passedID);
      await updateDoc(movieRef, {
        savedShows: result,
      })
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>My Shows</h2>
      <div className='relative flex items-center group'>
        
      </div>
    </>
  )
}

export default SavedShows