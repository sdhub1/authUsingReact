import React from 'react'
import { Link } from 'react-router'
import { useStore } from '../AuthStore'

const Nav = () => {
    const {logout, auth}=useStore()

  return (
    
    <>
    <ul>

    <Link to='/'>Home</Link>
    <Link to='/admin'>Admin Dashboard</Link>
    <Link to='/staff'>Staff Dashboard</Link>
    <Link to='/students'>Students Dashboard</Link>
    <Link to='/students/marks'>Students Marks</Link>
 {auth&&   <button onClick={()=>logout()}>Logout</button>}
    </ul>
    </>
  )
}

export default Nav