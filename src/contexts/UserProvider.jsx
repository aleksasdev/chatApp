import { Fetcher } from '@aleksasdev/json-api';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { loginUser } from '@/components/authentication/authentication';
import { DATABASE_URL, USERS_ROUTE } from '@/constants/general';

export const UserContext = React.createContext();

export const UserProvider = (props) => {

   const [user, setUser] = useState(null);

   const handleRememberMe = async () =>{
      const allUsers = await new Fetcher(DATABASE_URL+USERS_ROUTE).get();

      const username = localStorage.getItem('username');
      const password = localStorage.getItem('password');

      const currentUser = allUsers.find(user => user.username === username);
      const isPasswordMatch = currentUser?.password === password;

      if(!isPasswordMatch) return;

      loginUser({
         userId: currentUser.id,
         username: username,
         avatarUrl: currentUser.avatarUrl,
         setUser
      });
   }

   useEffect(()=>{
      handleRememberMe();
   }, [])

   return (
      <UserContext.Provider value={{
         user, setUser
      }}>
         {props.children}
      </UserContext.Provider>
   )
}
