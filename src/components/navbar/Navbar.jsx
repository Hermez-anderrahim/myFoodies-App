import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
export const Navbar = () => {
  return (
    <div className='navbar'> 
        
        <div className='logo'>myFoodies</div>
        
        <div className='links'>
         
        <Link className='Home link' to="/">Home</Link>
        <Link className='myfoodies link ' to="/myfoodies">my foodies</Link>
        <Link className='login link' to="/login">log in</Link>
        <Link className='signup link' to="/signup">sign up</Link>
        </div>

    </div>
  )
}
