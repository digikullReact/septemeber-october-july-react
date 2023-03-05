import React, { useState,useEffect } from 'react'
import axios from "axios";  // axios is a library to fetch the data from backend  // fetch
const URL="http://localhost:8080"
// every time the state is changed the component re renders that means the entire logic in the 
// component gets redone ---happens again
const ApiCall = () => {
  const [state,setState]=useState([]);

  const handleClick=()=>{
    setToggle(toggle+1);
  }

  // We will create a function to fetch the data from axios

  const getApiData=()=>{
   // axios code to get the data from api
   axios.get(`${URL}/posts`).then(response=>{
    console.log("Api called");
  //  console.log(response.data);

  setState(response.data); // --->component re renders --->getapidata--->setState-->compoenent re render--->getApiData
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
      {
        state.map(ele=>(
          <li key={ele._id}>{ele._source.name}</li>

        ))
      }


    </div>
  )
}

export default ApiCall