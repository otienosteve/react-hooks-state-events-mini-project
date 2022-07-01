import React from "react";

function Task({text,category,taskDelete,id}) {

  return (
    <div className="task" >
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={()=>taskDelete(id)} >X</button>
    </div>
  );
}

export default Task;
