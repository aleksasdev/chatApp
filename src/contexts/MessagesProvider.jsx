import React, { createContext, useState } from 'react'
import { Fetcher } from '@aleksasdev/json-api';
import { DATABASE_URL } from '@/contexts/DefaultProvider';

export const MessagesContext = createContext();

export const PUBLIC_MESSAGES_ROUTE = "/publicMessages";

export const MessagesProvider = (props) => {

   const [publicMessages, setPublicMessages] = useState(null);

   const fetchPublicMessages = async () =>{
      const allPublicMessages = await new Fetcher(DATABASE_URL+PUBLIC_MESSAGES_ROUTE).get();
      setPublicMessages(allPublicMessages);
   }

   return (
      <MessagesContext.Provider value={{
         publicMessages, setPublicMessages,

         fetchPublicMessages
      }}>
         {props.children}
      </MessagesContext.Provider>
   )
}
