import React from 'react'
import { useContext } from 'react'
import { UserContext } from '@/contexts/UserProvider';
import { useNavigate } from 'react-router-dom';

export const Logout = () => {

   const { setUser } = useContext(UserContext);
   const navigator = useNavigate();

   setUser(null);
   navigator("/chat");

   localStorage.removeItem('username');
   localStorage.removeItem('password');

   return (
      <>
      </>
   )
}
