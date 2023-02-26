import React from 'react'
import { useState } from 'react';  // its inbuilt in react  and with the help of this you can manage state of the component
// hooks are just functions doing some special things
const Todo = () => {
   const [state,setState]= useState("Something sgsgsgsgsgsgsgsg");
   const [newState,changeNewState]=useState("");
  const type="text";


  function addTodo(){
    changeNewState(state.toLocaleUpperCase())
  }

  const handleChange=(event)=>{
    setState(event.target.value);  // the value that user is typing 
  }

  return (
    <div className='row'>
         <h1 style={{marginTop:"50px" ,marginLeft:"600px"}}>{state}</h1>
         <h1 style={{marginTop:"50px" ,marginLeft:"600px"}}>{newState}</h1>


        <div className='col-4 offset-5'>
   


  <input type={type}  className="form-control" onChange={handleChange} />

  <button className='btn btn-primary' style={{marginTop:"20px"}} onClick={addTodo}>
    Add To Do
  </button>


        </div>



  
    </div>
  )
}

export default Todo