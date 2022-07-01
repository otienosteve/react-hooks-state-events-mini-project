import React,{useState} from "react";
import {v4 as uuid} from 'uuid'
function NewTaskForm({categories,onTaskFormSubmit }) {
  // console.log(Categories)
  const [detail,setDetail]=useState('')
  const [categ,setCateg]=useState("")
  function onCreateTask(e){
    e.preventDefault()
    if(categ&&detail){

      const newTask={
        id:uuid(),
        text:detail,
      category:categ
    }
    console.log(newTask)
    onTaskFormSubmit(newTask)
    setCateg("All")
    setDetail('')
  }
      }
  return (
    <form className="new-task-form" onSubmit={(e)=>onCreateTask(e)}>
      <label>
        Details
        <input type="text" name="text" value={detail} onChange={(e)=>setDetail(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" onChange={(e)=>setCateg(e.target.value)}>
        {categories.map((category)=><option value={category} key={uuid()}>{category==='All'?'category':category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
