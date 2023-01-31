import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './main.css';

export const Navbar = () => {
   return (
      <>
         <nav>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/chat">Chat</Link>
         </nav>
         
         <Outlet />
      </>
   )
}
