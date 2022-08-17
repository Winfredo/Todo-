import React from 'react'

function InputPage() {
  return (
    <div className='flex items-stretch justify-items-stretch  '>
      <button className='bg-blue-400 hover:bg-blue-500 ' >
        All
        </button> 
      <button className='bg-green-500'> 
      
        Completed</button>
      <button className='bg-yellow-400'>
        Pending</button>
    </div>
  )
}

export default InputPage;