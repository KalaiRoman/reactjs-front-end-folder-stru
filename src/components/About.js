import React from 'react'
import { useSelector } from 'react-redux'

function About() {
  const state=useSelector((state)=>state?.Login);

  console.log(state?.loading,"state")

  
  return (
    <div>

      
      About js
    </div>
  )
}

export default About
