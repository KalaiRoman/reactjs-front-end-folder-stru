import React, { useEffect } from 'react'
import { getToken } from '../middleware/TokenGet'
import { useNavigate } from 'react-router-dom';

function Forgetpassword() {
    const token=getToken();
    const navigate=useNavigate();
    useEffect(()=>{
        if(token)
        {
            navigate("/home")
        }
    },[token])
  return (
    <div>
      Forgetpassword
    </div>
  )
}

export default Forgetpassword
