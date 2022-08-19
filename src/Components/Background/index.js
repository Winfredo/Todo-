import React from 'react'
import { GrAddCircle } from "react-icons/gr"; 
import InputPage from '../Input';

function BackgroundPage() {
  return (
    <div className='w-screen h-screen overflow-hidden md: bg-red-400 flex flex-col items-center'>
      <div className='font-semibold text-[3rem] m-14'>
        <h1>Winfred's Todo List</h1>
      </div>
      <div className='w-screen flex items-center justify-center'>
        <form className=' w-96 '>
          <div className='flex justify-between items-center gap-x-1 bg-white border border-red-500 w-full h-10 p-0'>
          <input className='w-60 pl-2 h-8 outline-none ' type="text" placeholder="" />
            <button className=' h-10  p w-[15%] shadow-xl hover:bg-red-500 bg-red-400 flex items-center justify-center  cursor-pointer"'>
              <GrAddCircle />
            </button>
          </div>
        </form>
      </div>

      < InputPage />

    </div>
    
    
  );
}

export default BackgroundPage;