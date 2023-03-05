import React, { useState } from 'react'

const Child = (props) => {
    const [state,setState]=useState({
        input1:"",
        input2:""

    });
  //  const [input2,setInput2]=useState("");

   // props.sum();
const handleClick=()=>{
   // console.log(state);
    props.add(Number(state.input1),Number(state.input2));
}

const handleChange=(event)=>{
   // console.log(event);
    let newState={...state,[event.target.name]:event.target.value};
    setState(newState)
    //console.log(event.target.name);
   // console.log(event.target.value);


}

  return (
    <div>

   <button onClick={handleClick}>Invoke Parent Method</button>
   <input type="text" onChange={handleChange} name="input1"/>
   <input type="text" onChange={handleChange} name="input2" />


    </div>
  )
}

export default Child