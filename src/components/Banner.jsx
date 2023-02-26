import React from 'react'

// ES6 modules --> import and export statement
// common js module system --> node js   --- exports 

export const Banner = () => {
  return (
    <div className='row'>
        <div className='col-8 offset-2'>
        

        <img style={{width:"100%"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Golden_Retriever_standing_Tucker.jpg/640px-Golden_Retriever_standing_Tucker.jpg" class="img-fluid" alt="Some Image"/>


        </div>


    </div>
  )
}


export const Banner3 = () => {
  return (
    <div className='row'>
        <div className='col-8 offset-2'>
        

        <img style={{width:"100%"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Golden_Retriever_standing_Tucker.jpg/640px-Golden_Retriever_standing_Tucker.jpg" class="img-fluid" alt="Some Image"/>


        </div>


    </div>
  )
}



//export default Banner  // you can have only one default export per file or per module



