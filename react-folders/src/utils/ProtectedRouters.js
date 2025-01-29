import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getToken } from '../middleware/TokenGet';
function ProtectedRouters() {
  const token = getToken(); 
  return token ? <Outlet /> : <Navigate to="/" replace />;
}

export default ProtectedRouters;
