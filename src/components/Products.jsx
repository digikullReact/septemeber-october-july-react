import React, { useState,useEffect } from 'react';
import axios from 'axios';

const Products = () => {

    /**
     * 

    // mounting behaviour
    useEffect(function(){
        getProducts();
    },[])

    // updation behaviour 


    useEffect(function(){
        getProducts();
    })

  
    useEffect(function(){
        getProducts();
    },[dependency])



    // unmounting behaviour
    useEffect(function(){

        return ()=>{
            // inside this function you can observe the unmounting behaviour
        }
    
    },[])

     */
    const [state,setState]=useState([]);

    const getProducts=()=>{
        axios.get("https://fakestoreapi.com/products").then(response=>{

        //console.log(response.data);
        setState(response.data)


        }).catch(err=>{
          console.log(err);
        })


    }
// mounting behaviour
    useEffect(function(){
        getProducts();
    },[])
  return (
    <div className='row'>
        {

            state.map(ele=>(
                <div className='col-4'>
                    <h1>{ele.title}</h1>
                    <img src={ele.image} style={{width:"200px",height:"200px"}} alt="" />

                </div>

            ))

        }



    </div>
  )
}

export default Products