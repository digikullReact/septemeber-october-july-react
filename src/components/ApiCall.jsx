import React, { useState,useEffect } from 'react'
import axios from "axios";  // axios is a library to fetch the data from backend  // fetch
const URL="http://localhost:8080"
// every time the state is changed the component re renders that means the entire logic in the 
// component gets redone ---happens again
const ApiCall = () => {
  const [state,setState]=useState([]);
  const [toggle,setToggle]=useState(10);
  const [input,setInput]=useState("");

  const handleClick=()=>{
    setToggle(toggle+1);
  }

  const handleChange=(event)=>{
    setInput(event.target.value) // its not synhcronous -->it is async
    console.log(input);

  }

 // handleClick();---->if you are directly calling the method that changes state in the component it will cause ifnfinite loop

  // We will create a function to fetch the data from axios

  const getApiData=()=>{
   // axios code to get the data from api
   axios.get(`${URL}/posts`).then(response=>{
    console.log("Api called");
  //  console.log(response.data);

  setState(response.data); // --->component re renders --->getapidata--->setState-->compoenent re render--->getApiData
  ///console.log("hey state",state);
   }).catch(err=>{
    console.log(err);
   })

    }




    // mounting behaviour ---mounting happens only once
    // this particular syntax of use effect will be called only once when your component
    // is hard reloaded or loaded for the first time in new tab
    useEffect(function(){
      getApiData();

    },[])
    /**
     *   useEffect(function(){
      getApiData();

    })

      useEffect(function(){
      getApiData();

    },[dependency])
     * 
     */



  return (
    <div>
      <h1>{toggle}</h1>
      {
        state.map(ele=>(
          <li key={ele._id}>{ele._source.name}</li>

        ))
      }

      <input type="text" onChange={handleChange} />

<button onClick={handleClick}>
  Click Me
</button>

    </div>
  )
}

export default ApiCall