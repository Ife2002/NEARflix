import React, { useState, useEffect } from 'react'
import {
  getMovies as getMovieList,
  buyMovie,
  saveMovie,
} from "../../utils/marketplace";
import { saveMovie } from '../utils/marketplace';
import { accountBalance, login, logout as destroy } from "../utils/near";



const SavedShows = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false);

  const account = window.walletConnection.account();

  const getMovies = useCallback(async () => {
    try {
      setLoading(true);
      setMovies(await getMovieList());
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  });

  const myArray = [{x:100}, {x:200}, {x:300}];

const saveMovie = saveMovie.filter(item => item.owner = `${account.accountId}`);
console.log(saveMovie); // [{x:300}] 


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

// decrypt information
  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>My Shows</h2>
      <div className='relative flex items-center group'>
        
      </div>
    </>
  )
}

export default SavedShows