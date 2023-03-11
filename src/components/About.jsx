import React from 'react'
import { Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div>
    <h1>I am  a Navbar </h1>


    <Outlet/> {/** this outlet will make sure that all the child components are visbible */}



    </div>
  )
}

export default About