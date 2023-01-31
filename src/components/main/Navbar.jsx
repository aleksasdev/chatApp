import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './main.css';
import { UserContext } from '@/contexts/UserProvider';
import { useContext } from 'react';
import { Logout } from '../authentication/Logout';

export const Navbar = () => {

   const { user } = useContext(UserContext);

   return (
      <>
         <nav>
            {!user &&
               <>
                  <Link to="/login">Login</Link>
                  <Link to="/register">Register</Link>
               </>
            }
            <Link to="/chat">Chat</Link>
            {user && <Link to="/logout">Logout</Link> }
         </nav>
         
         <Outlet />
      </>
   )
}
