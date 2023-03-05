import React from 'react'

const SingleItem = (props) => {

  /// --->
  const handleChange=()=>{

  }

  return (
    <>
        <li  className="list-group-item" >
          {
            props.isEdit? <input type={"text"} value={props.somkey} onChange={handleChange}/>: <>{props.somkey}</>
          }
          
         
          
     
        
        
<button onClick={function(){
  return props.deleteItem(props.index)
}}>
  Delete
</button>


<button onClick={function(){
  return props.editItem(props.index)
}}>
  Edit
</button>
        </li>


    </>
  

  
  )
}

export default SingleItem