import React from 'react'

function InputPage() {
  return (
    <div className='grid grid-cols-3 mt-10 box-content items-center justify-between cursor-pointer'>
     
      <button className='bg-blue-300 hover:bg-blue-400 mr-8 px-8 py-1' >
        ALL : 0
        </button> 
        
      <button className='bg-green-400 hover:bg-green-500 mr-8 px-8 py-1'> 
        COMPLETED : 0
        </button>

      <button className='bg-yellow-300 hover:bg-yellow-400 mr-8 px-8 py-1'>
        PENDING : 0</button>
    </div>
  )
}

export default InputPage;