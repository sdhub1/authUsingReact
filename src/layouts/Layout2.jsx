import React from 'react'
import { Outlet } from 'react-router'
import Nav from '../components/Nav'

const Layout2 = () => {
  return (
    <div>Layout2 
      <Nav/>
        <Outlet/>
        <h1>this should work with all auth roles  </h1>
    </div>
  )
}

export default Layout2