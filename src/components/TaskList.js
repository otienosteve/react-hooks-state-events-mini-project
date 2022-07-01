import React from "react";
import Task from './Task';
// import {v4 as uuid } from 'uuid'
function TaskList({tasks,taskDelete}) {
  return (
    <div className="tasks" >{
      tasks.map((task)=><Task category={task.category} id={task.id} key={task.id} text={task.text} taskDelete={taskDelete}/>)
    }
    </div>
  );
}

export default TaskList;
