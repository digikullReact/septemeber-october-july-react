import React from 'react'

const Child = (props) => {
   // props.sum();
const handleClick=()=>{
    props.add();
}

  return (
    <div>

   <button onClick={handleClick}>Invoke Parent Method</button>

    </div>
  )
}

export default Child