import React, { useContext, useEffect } from 'react'
import { MessagesContext } from '@/contexts/MessagesProvider';

export const MessageBox = () => {

   const { fetchPublicMessages, publicMessages } = useContext(MessagesContext);

   useEffect(()=>{
      fetchPublicMessages();
   }, [])

   return (
      <div className='message-box'>
         {publicMessages &&
            publicMessages.map(entry => {
               console.log(entry)
               return <div className="">{entry.message}</div>
            })
         }
      </div>
   )
}
