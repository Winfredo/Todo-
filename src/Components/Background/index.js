//import React from 'react'
import React, { useState, useEffect } from 'react';
import { GrAddCircle } from "react-icons/gr"; 
import InputPage from '../Input';
import TodoPage from '../todo';

const BackgroundPage = () => {

  const [todo, setTodo] = useState("")
  const [allTodo, setAllTodo] = useState([])

  const addTodo = (e) => {
    e.preventDefault()

    const todoItem = {
      id:new Date().getTime(),
      text:todo,
      isChecked: false   
    }
      if (todo !== ""){
        setAllTodo([...allTodo].concat(todoItem).reverse())
        setTodo("")
      }

      console.log(allTodo)
      
  }

    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(allTodo))
    }, [allTodo])
    
    


  return (
    <div className='w-screen h-screen overflow-hidden bg-red-400 flex flex-col items-center'>
      <div className='font-semibold text-[3rem] m-14'>
        <h1>Winfred's Todo List</h1>
        
      </div>
      <div className='w-screen flex items-center justify-center  '>
        <form className=' w-96 ' onSubmit={addTodo}>
          <div className='flex justify-between items-center gap-x-1 bg-white border border-red-500 w-full h-10 p-0'>
          <input className=' font-semibold w-60 pl-2 h-8 outline-none ' type={"text"} value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="Create a new todo" />
            <button className=' h-10  p w-[15%] shadow-xl hover:bg-red-500 bg-red-400 flex items-center justify-center  cursor-pointer"' onClick={addTodo}>
               <GrAddCircle size={21}/>
            </button>
          </div>
        </form>
      </div>

      < InputPage />
      

      <div  className='w-screen h-full flex items-center justify-center'>
        <div className='w-[60%] h-full flex justify-center items-start mt-10'>
          <div className='w-full flex flex-col '>
            <TodoPage />
          </div>
        </div>
      </div>
      

    </div>
    
    
  );
}

export default BackgroundPage;

