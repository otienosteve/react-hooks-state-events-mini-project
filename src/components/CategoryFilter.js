import React, { useState }  from "react"
import {v4 as uuid} from 'uuid'

function CategoryFilter({categories,selectedCategory}) {
  const [button,setButton]=useState('')
  const handleSelected=(e)=>{
   setButton(e.target.name)
   selectedCategory(e.target.name)
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((cat)=>{
        return <button key={uuid()} onClick={(e)=>handleSelected(e)} className={button===cat?"selected":null} name={cat}>{cat}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
