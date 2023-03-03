import React from 'react'

import { useState } from 'react';  // its inbuilt in react  and with the help of this you can manage state of the component
// hooks are just functions doing some special things
const Todo2 = (props) => {
  //console.log("Data------",props)
  props.dataFun();
   const [state,setState]= useState("");
   const [state2,setState2]= useState("");

   const [list,setList]=useState(["apple","banana","cat","dog","elephant"])
  
  const type="text";


  function addTodo(){
    // every time its called it will create a new array 
    let newArray=[...list,(state+state2)];
    
    setList(newArray);
  }

  const handleChange=(event)=>{
    setState(event.target.value);  // the value that user is typing 
  }

  const handleChange2=(event)=>{
    setState2(event.target.value);  // the value that user is typing 
  }

  return (
    <div className='row'>
   


        <div className='col-4 offset-5'>
   


  <input type={type}  className="form-control" onChange={handleChange} />
  <input type={type}  className="form-control" onChange={handleChange2} />


  <button className='btn btn-primary' style={{marginTop:"20px"}} onClick={addTodo}>
    Add To Do
  </button>


        </div>

        <div style={{marginTop:"40px",border:"1px solid green"}} className="col-6 offset-3">
        <ul class="list-group">



          {
            list.map(ele=>(
              <li class="list-group-item">{ele}</li>

            ))
          }
          </ul>

        </div>



  
    </div>
  )
}

export default Todo2