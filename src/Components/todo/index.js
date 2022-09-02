import React from "react";
import {BsCheckLg} from "react-icons/bs";
import {MdOutlineDeleteOutline} from "react-icons/md";


const TodoPage =({text, deleteTodo, isChecked, toggleChecked }) => {
  return (
    <div>
      {/* unit todo */}
      <div className="w-[80%]  flex items-center justify-center gap-2">
        <div className="w-[60%] bg-white py-2 px-3">
          <p className="h-6"> {text}</p>
        </div>
        <div className="w-[10%] flex items-center justify-center gap-1">
          <button className=" bg-green-400 hover:bg-green-500 py-2 px-2 text-white text-base font-sans " onClick={toggleChecked}>
            {isChecked && < BsCheckLg size={26}/>}
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
