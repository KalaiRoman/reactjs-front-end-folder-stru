import React, { useEffect } from 'react'
import Routers from './router/Routers'
import { useNavigate } from 'react-router-dom';
import { RouterData } from './utils/routerData';

function App() {

  const navigate=useNavigate();

  const token=localStorage.getItem("auth")?localStorage.getItem("auth"):false;
  useEffect(()=>{
   
  },[token])
  return (
    <div>
      <Routers/>
    </div>
  )
}

export default App
