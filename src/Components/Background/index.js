import React from 'react'
import { GrAddCircle } from "react-icons/gr"; 

function BackgroundPage() {
  return (
    <div className='w-screen h-screen  md: bg-red-300 flex flex-col items-center'>
      <div className='font-semibold text-[3rem] m-14'>
        <h1>Winfred Todo List</h1>
      </div>
      <div className='w-screen flex items-center justify-center'>
        <form className=' w-[60%] '>
          <div className='flex justify-center items-center gap-x-1 bg-white border border-red-500 w-full h-10 p-2'>
          <input className='w-[80%] h-8 outline-none ' type="text" placeholder="" />
            <button className=' h-8 p w-[15%] shadow-xl hover:bg-[#90ad0d] bg-gray-800 flex items-center justify-center border cursor-pointer"'>
              <GrAddCircle />
            </button>
          </div>
        </form>
      </div>

    </div>
    
    
  );
}

export default BackgroundPage;