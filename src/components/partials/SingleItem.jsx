import React, { useState } from 'react'

const SingleItem = (props) => {
  const [input ,setInput]=useState(props.somkey);

  /// --->
  const handleChange=(event)=>{
    setInput(event.target.value);

  }

  return (
    <>
        <li  className="list-group-item"  style={{textDecoration:props.done==true? "line-through":""}}>
          {
            props.isEdit? <input type={"text"} value={input} onChange={handleChange}/>: < >{props.somkey}</>
          }
          
         
          
     
        
        
<button onClick={function(){
  return props.deleteItem(props.index)
}}>
  Delete
</button>

<button onClick={function(){
  return props.doneItem(props.index)
}}>
  Done
</button>

{
   props.isEdit?
  <button onClick={function(){
    return props.saveEditItem(input,props.index)
  }}>
    Save
  </button>
  :

  <button onClick={function(){
    return props.editItem(props.index)
  }}>
    Edit
  </button>
  

}


        </li>


    </>
  

  
  )
}

export default SingleItem