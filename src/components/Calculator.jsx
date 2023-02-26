import React, { useState } from 'react'

const Calculator = () => {
    const [input1,setInput1]=useState(0);
    const [input2,setInput2]=useState(0);
    const [display,setDisplay]=useState(0);

    const handleChange1=(event)=>{
        setInput1(event.target.value)

    }
    const handleChange2=(event)=>{
        setInput2(event.target.value)

    }

    const addTwo=()=>{
        let value=Number(input1)+Number(input2)
        setDisplay(value);
    }

  return (
    <div className='col-6 offset-3' style={{marginTop:"20px"}}>
    <input type="text"  className='form-control' onChange={handleChange1}/> <br></br>

    <input type="text"  className='form-control' onChange={handleChange2}/>


<button className='btn btn-primary' onClick={addTwo}>
    Add
</button>

<h1>{display}</h1>


    </div>
  )
}

export default Calculator