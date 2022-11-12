import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
    const { users} = useSelector(state => state.login)

  return users && users.isAuthenticated ? <Outlet/>:<Navigate to='/LoginUser'/> 
}

export default PrivateRoute