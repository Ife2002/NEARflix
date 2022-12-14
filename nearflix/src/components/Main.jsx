import axios from 'axios';
import React, { useEffect, useState } from 'react';
import requests from '../Request';
import Wallet from './Wallet';

import { FaPlay } from 'react-icons/fa';
import { BsPlusLg } from 'react-icons/bs';

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular)
    .then((res) => {
      setMovies(res.data.results);
    })
  }, []);
  // console.log(movie)

  const truncateString = (str, num) => {
    if(str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str
    }
  }

  return (
    <div className='w-full h-[550px] text-white'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[550px] bg-gradient-to-t from-black'>
          <div className='w-[100%] flex justify-end '>
            <div className='h-[100%] w-[10%] bg-white rounded-[14px] text-black'>
              <Wallet />
            </div>
          </div>
        </div>
        <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} 
          alt={movie?.title} 
        />
        <div className='absolute w-full top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
          <div className='flex my-6'>
            <button className='border bg-gray-200 hover:bg-red-600 text-black text-sm md:text-2xl  py-2 px-2 md:px-5 flex items-center rounded'>
              <FaPlay  className='mr-2' />
              Wallet
            </button>
            <button className='bg-zinc-500 bg-opacity-50 hover:bg-opacity-75 text-white text-sm md:text-2xl py-3 px-2 md:px-5 ml-4 flex items-center rounded'>
              <BsPlusLg className='mr-2' />
              My list
            </button>
          </div>
          <p className='w-full  md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
            {truncateString(movie?.overview, 150)}
          </p>
          <p className='text-gray-400 text-sm'>
            Release date: {movie?.release_date}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main