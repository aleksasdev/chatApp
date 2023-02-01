import React, { createContext, useContext, useState } from 'react'
import { Fetcher } from '@aleksasdev/json-api';
import { UserContext } from './UserProvider';
import { nanoid } from 'nanoid';
import { DATABASE_URL, PUBLIC_MESSAGES_ROUTE } from '@/constants/general';

export const MessagesContext = createContext();

export const MessagesProvider = (props) => {

   const { user } = useContext(UserContext);
   const [publicMessages, setPublicMessages] = useState(null);

   const fetchPublicMessages = async () =>{
      const allPublicMessages = await new Fetcher(DATABASE_URL+PUBLIC_MESSAGES_ROUTE).get();
      setPublicMessages(allPublicMessages);
   }

   const sendPublicMessage = async (message) =>{
      
      console.log(user)

      const messageObject = {
         id: nanoid(),
         ownerId: user.id,
         date: new Date().toLocaleString("lt-LT")
      }

      console.log(messageObject);

      // await new Fetcher(DATABASE_URL+PUBLIC_MESSAGES_ROUTE).post({

      // })
   }

   return (
      <MessagesContext.Provider value={{
         publicMessages, setPublicMessages,
         sendPublicMessage,
         fetchPublicMessages
      }}>
         {props.children}
      </MessagesContext.Provider>
   )
}
