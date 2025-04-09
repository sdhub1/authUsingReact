import React from 'react'
import { Outlet } from 'react-router'
import Nav from '../components/Nav'

const Layout1 = () => {
  return (
    <div>Layout1
        <h1>this should work with Staff and Admin</h1>
        <Nav/>
        <Outlet/>
    </div>
  )
}

export default Layout1