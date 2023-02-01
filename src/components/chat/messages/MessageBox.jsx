import React, { useContext, useEffect } from 'react'
import { MessagesContext } from '@/contexts/MessagesProvider';
import { nanoid } from 'nanoid';
import { Message } from './Message';

export const MessageBox = () => {

   const { fetchPublicMessages, publicMessages } = useContext(MessagesContext);

   useEffect(()=>{
      fetchPublicMessages();
   }, [])

   return (
      <div className='message-box'>
         {publicMessages &&
            publicMessages.map(entry => <Message messageObject={entry} key={nanoid()} />)
         }
      </div>
   )
}
