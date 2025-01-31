import React from 'react'
import { getToken } from '../middleware/TokenGet'
import { Navigate } from 'react-router-dom';

const Signup = () => {
    const token=getToken();
    if(token)
    {
        return <Navigate to="/home" replace/>
    }
  return (
    <div>
      Signup Page
    </div>
  )
}

export default Signup
