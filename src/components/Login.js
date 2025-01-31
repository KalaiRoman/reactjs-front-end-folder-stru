import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { getToken } from '../middleware/TokenGet';
import '../styles/Login.scss';
function Login() {
  const navigate=useNavigate();
  const LoginButton=()=>{
    localStorage.setItem("auth",true);
    navigate("/home");
  }

  if(getToken())
  {
    return <Navigate to="/home" replace/>
  }
  else{
    return (
      <div>
        Login
        <button onClick={LoginButton}>Login Now...</button>
      </div>
    )
  }


  
}

export default Login
