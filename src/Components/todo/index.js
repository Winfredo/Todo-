import React from "react";
import {BsCheckLg} from "react-icons/bs";
import {MdOutlineDeleteOutline} from "react-icons/md";


const TodoPage =({text, deleteTodo, isChecked, toggleChecked }) => {
  return (
    <div>
      {/* unit todo */}
      <div className="w-[80%]  flex items-center justify-center gap-2">
        <div className="w-[60%] bg-white py-2 px-3">
          <p className={ `${isChecked ? "h-6 bg-transparent text-decoration-line: line-through text-[#0f90a1] " : " h-6 " } `} > {text}</p>
        </div>
        <div className="w-[10%] flex items-center justify-center gap-1">
          <button className= {`${isChecked ? " bg-green-400 hover:bg-green-500 py-2 px-2 text-white text-base font-sans" : "bg-transparent bg-green-400 hover:bg-green-500 py-2 px-2 text-white text-base font-sans "}` } onClick={toggleChecked}>
            {isChecked && < BsCheckLg size={24}/>}
          </button> 
          <button className="bg-red-500 hover:bg-red-600 py-2 px-2 text-white text-base font-sans " onClick={deleteTodo}>
          <MdOutlineDeleteOutline size={26}/>
          </button>
        </div>
      </div>
    </div>
  );
} 

export default TodoPage; 
