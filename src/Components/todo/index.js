import React from "react";

const TodoPage =() => {
  return (
    <div>
      {/* unit todo */}
      <div className="w-[80%]  flex items-center justify-center gap-2">
        <div className="w-[60%] bg-white py-2 px-3">
          <p>Todo Text</p>
        </div>
        <div className="w-[10%] flex items-center justify-center gap-2">
          <button className="bg-green-400 py-2 px-3 text-white text-base font-sans ">
            check
          </button>
          <button className="bg-red-500 py-2 px-3 text-white text-base font-sans ">
            delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoPage;