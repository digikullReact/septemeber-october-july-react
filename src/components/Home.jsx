import React from 'react'
import Header from './Header'
import Footer from './Footer'  // the file path
import {Banner,Banner3} from './Banner'  // non default export

function Home() {
  return (
    <div>
<Header/>
<Banner3/>
<button type="button" className="btn btn-primary">Primary</button>

<Footer/>
  

    </div>
  )
}

export default Home