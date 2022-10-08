import React, { useState } from 'react'
//import { Link, useNavigate } from 'react-router-dom'


const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

 // const navigate = useNavigate()
  

  return (
    <>
      <div className='w-full h-screen'>
        <img
          className='block absolute w-full h-full object-cover' 
          src="https://assets.nflxext.com/ffe/siteui/vlv3/3a073c5f-0160-4d85-9a42-6f59aa4b64b9/6d1d9ae0-45d0-4194-a4c2-222ae667bf0d/BR-pt-20220718-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
          alt="/" />
          <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
          <div className="fixed w-full px-4 py-[15%] z-50 ">
            <div className='max-w-[50%] h-[100%] flex justify-center mx-auto bg-black/75 text-white rounded-lg'>
              <div className='mx-auto py-16 px-[10%] flex flex-col justify-center'>
                <h1 className='text-[2rem] font-bold text-center'>Connect Wallet</h1>
              
                  <button
                    className='border-red-600 border-[3px] py-3 my-6 rounded-[50px] px-[10%] font-bold'
                  >
                  <p> Connect Wallet </p> 
                  </button>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Signup