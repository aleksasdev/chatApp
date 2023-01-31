import React, { useState } from 'react'
import { useEffect } from 'react';

export const UserContext = React.createContext();
export const USERS_ROUTE = "/users";

export const USER_TEMPLATE = {
   id: null,
   userame: null,
   password: null,
   avatarUrl: null
}

export const UserProvider = (props) => {

   const [user, setUser] = useState(null);

   const handleRememberMe = async () =>{

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
