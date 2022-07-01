import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks,setTasks]=useState(TASKS)
  function taskDelete(id){
    const newTasks=tasks.filter((tsk)=>tsk.id!==id)
    setTasks(newTasks)
  //  console.log(id)
  }
  const onTaskFormSubmit=(newTask)=>{
  const newTasks=[...tasks,newTask]
  setTasks(newTasks)
  }
  const selectedCategory=(category)=>{
    const allTasks=TASKS
    console.log(category)
    if (category==='All'){
    setTasks(allTasks)
    }else{
     
      const newTasks=allTasks.filter((tsk)=>tsk.category===category)
      setTasks(newTasks)

    }
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} />
      <NewTaskForm categories={CATEGORIES} Tasks={tasks} onTaskFormSubmit={onTaskFormSubmit }/>
      <TaskList tasks={tasks} text={"All"} taskDelete={taskDelete}/>
    </div>
  );
}

export default App;
