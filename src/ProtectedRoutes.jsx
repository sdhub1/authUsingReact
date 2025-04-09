import React, { useState } from 'react'
import { Outlet } from 'react-router'
import Login from './pages/Login'
import {useStore} from './AuthStore'
import Nav from './components/Nav'
// This component is used to protect routes that require authentication or authorization
// It checks if the user is logged in ad has the required role to access the route

const ProtectedRoutes = ({role}) => {
  const {auth, authRole}=useStore()
    console.log(auth);
    
    if (auth && role.includes(authRole)) return <>  <Nav/> <Outlet/></>
    if (auth && !role.includes(authRole)) return <> <Nav/>  <h1>Unauthorized</h1></>
  return (
    <>
    <Nav/>
<Login />
    
    </>
  )
}

export default ProtectedRoutes