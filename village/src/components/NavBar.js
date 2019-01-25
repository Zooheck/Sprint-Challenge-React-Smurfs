import React from 'react'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink exact to="/">Smurf List</NavLink>
      <NavLink to="/add-smurf">Add New Smurf</NavLink>
    </div>
  )
}

export default NavBar
