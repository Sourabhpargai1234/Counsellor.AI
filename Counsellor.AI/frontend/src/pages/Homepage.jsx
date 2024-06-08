import React, { useState, useEffect } from 'react'
import TextTransition, { presets } from 'react-text-transition';
import { IoReorderThreeSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import './index.css'


function Homepage() {
  const [button , setButton] = useState(true)
  const[index, setIndex] = useState(true)
  const TEXTS = ['Predict', 'Analyse', 'Guide', 'Help'];

  const toggleMenu = () => {
    setButton(!button);
  }

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index+1), 3000,);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <div className='bg-cyan-400  w-full h-screen'>
      <nav className='top-0 z-10 p-5 bg-white shadow-md fixed right-0 left-0 justify-between items-center'>
        <span className='text-2xl font-bold cursor-pointer float-left'>Counsellor.AI</span>
        <div className='md:hidden float-right'>
          {button ? (
            <IoReorderThreeSharp className='text-4xl cursor-pointer mx-2' onClick={toggleMenu} />
          ) : (
            <IoClose className='text-4xl cursor-pointer mx-2' onClick={toggleMenu} />
          )}
        </div>
        <ul className={`float-right md:flex md:items-center md:pl-0 pl-7 w-full md:w-auto py-8 md:py-0 top-[80px] absolute left-0 bg-white md:opacity-100 md:visible md:relative md:top-auto transition-all ease-in duration-500 ${button ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
          <li className='mx-2 lg:mx-4'>
            <a href="/" className='text-lg lg:text-xl hover:text-cyan-500 duration-500'>Home</a>
          </li>
          <li className='mx-2 lg:mx-4'>
            <a href="/ai" className='text-lg lg:text-xl hover:text-cyan-500 duration-500'>Counsellor</a>
          </li>
          <li className='mx-2 lg:mx-4'>
            <a href="/feedback" className='text-lg lg:text-xl hover:text-cyan-500 duration-500'>Testimonials</a>
          </li>
          <li className='mx-2 lg:mx-4'>
            <a href="/profile" className='text-lg lg:text-xl hover:text-cyan-500 duration-500'>Profile</a>
          </li>
          <li className='mx-2 lg:mx-4'> 
            <a href="/contact" className='text-lg lg:text-xl hover:text-cyan-500 duration-500'>Contact</a>
          </li>
          <li className='mx-2 lg:mx-4 lg:text-xl'>
            <a href="/register">
              <button className='bg-cyan-400 text-white px-6 py-2 hover:bg-cyan-500 rounded'>Get Started</button>
            </a>
          </li>
        </ul>
      </nav>
      <div className=' text-green-700 italic font-bold text-4xl flex h-screen justify-center items-center flex-col'>
         <h1>Give me data I will</h1>
         <br />
         <h1><TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition></h1>
         <br />
         <h1>For the genuine one's</h1>
      </div>
      </div>
    </>
  )
}

export default Homepage
