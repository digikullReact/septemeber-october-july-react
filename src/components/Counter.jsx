import React from 'react'
import { useState } from 'react';  // its inbuilt in react  and with the help of this you can manage state of the component
// hooks are just functions doing some special things
const Todo = () => {
   const [state,setState]= useState("Something sgsgsgsgsgsgsgsg");
   const [count,setCount]= useState(0);


    const type="text";

function foo(){
    setState("Hey people i have changed the content")
    //console.log("clicked");
}
function Increment(){
    let updatedCount=count+1;
    setCount(updatedCount)
 
}
function Decrement(){
    let updatedCount=count-1;
    setCount(updatedCount)
}

  return (
    <div className='row'>
         <h1 style={{marginTop:"50px" ,marginLeft:"600px"}}>{state}</h1>
         <h1 style={{marginTop:"50px" ,marginLeft:"600px" ,color:"green"}}>{count}</h1>

        <div className='col-4 offset-5'>
   


  <input type={type}  className="form-control" />

  <button className='btn btn-primary' style={{marginTop:"20px"}} onClick={foo}>
    Add To Do
  </button>

  <button className='btn btn-primary' style={{marginTop:"20px"}} onClick={Increment}>
   Increment
  </button>
  <button className='btn btn-primary' style={{marginTop:"20px"}} onClick={Decrement}>
 
 Decrement
  </button>

        </div>


<p>
    {state}
</p>
  
    </div>
  )
}

export default Todo