import React from 'react'
import { useState } from 'react';  // its inbuilt in react  and with the help of this you can manage state of the component
import SingleItem from './partials/SingleItem';
// hooks are just functions doing some special things
const Todo = () => {
   const [state,setState]= useState("");
   const [list,setList]=useState([{name:"apple",isEdit:false},{name:"banana",isEdit:false},{name:"cat",isEdit:false}]);
   const [isEdit,setIsEdit]=useState(false);
  
  const type="text";


  function addTodo(){
    // every time its called it will create a new array 
    let newArray=[...list,{name:state,isEdit:false}];
    
    setList(newArray);
  }

  const handleChange=(event)=>{
    setState(event.target.value);  // the value that user is typing 
  }

  const deleteItem=(value)=>{
   console.log("Value to be deleted -----",value);


   //let newArray=list.filter(ele=>ele!=value);
   list.splice(value,1);
   //console.log(list);
   // list ----->0XCE4RTX(belongs to heap)---->tha heap memory has our original data

  // setList(list);  // this wont work because arrays are references
   
  // we have to create a new array ----> and set it in the setList
  let newArray=[...list];  // --->0XCFE4Q
   setList(newArray);  // reference 

   // What you have to delete the item on the basis of index--->

  }

  const editItem=(value)=>{

    // so just filtering out the item and then 
  let item=  list[value]; 
  list.splice(value,1);  // item removed from original array -->
  item.isEdit=true;
  setList([...list,item])

    //setIsEdit(true);


    // your task ---->
    // 1- make the functionality dont push it in the end --->
    // 2- make the edit work
   
 
   }

  return (
    <div className='row'>
   


        <div className='col-4 offset-5'>
   


  <input type={type}  className="form-control" onChange={handleChange} />

  <button className='btn btn-primary' style={{marginTop:"20px"}} onClick={addTodo}>
    Add To Do
  </button>


        </div>

        <div style={{marginTop:"40px",border:"1px solid green"}} className="col-6 offset-3">
        <ul class="list-group">



          {
            list.map((ele,i)=>(
             <SingleItem key={i}  isEdit={ele.isEdit} index={i} somkey={ele.name} editItem={editItem} deleteItem={deleteItem} />
            ))
          }
          </ul>

        </div>



  
    </div>
  )
}

export default Todo