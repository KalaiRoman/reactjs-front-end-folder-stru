import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoginUser_action } from '../redux/actions/Login_action';
function About() {
  const state=useSelector((state)=>state?.Login);
const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(LoginUser_action())
  },[])
  return (
    <div>
      About js
    </div>
  )
}

export default About
