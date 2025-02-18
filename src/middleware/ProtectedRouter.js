import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRouter() {
  return true ? <Outlet /> : <Navigate to="/home" />;
}

export default ProtectedRouter;
