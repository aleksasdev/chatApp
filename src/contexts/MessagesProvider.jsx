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
      
      let date = new Date().toLocaleTimeString('lt-LT', 
      {
         year: 'numeric', month: 'numeric', hour: '2-digit', minute:'2-digit'
      });

      const messageObject = {
         id: nanoid(),
         ownerId: user.userId,
         message,
         date,
         reactions: []
      }

      await new Fetcher(DATABASE_URL+PUBLIC_MESSAGES_ROUTE).post(messageObject)
      setPublicMessages(current => [...current, messageObject]);
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
