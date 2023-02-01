import React, { useContext, useEffect } from 'react'
import './chat.css'
import './messages/messages.css'
import { UserContext } from './../../contexts/UserProvider';
import { MessagesContext } from './../../contexts/MessagesProvider';
import { MessageInput } from './messages/MessageInput';
import { MessageBox } from './messages/MessageBox';

export const Chat = () => {

   const { user } = useContext(UserContext);
   const { fetchPublicMessages, publicMessages } = useContext(MessagesContext);

   useEffect(()=>{
      fetchPublicMessages();
   }, [])

   return (
      <section id="chat">
         <div className="chat-container">
            <div className="friends-container">

            </div>

            <div className="user-info-container">
                  {user
                  ?
                     <div className="user-details-wrapper">
                        <img src={user?.avatarUrl} alt="user-avatar" />
                        <p className='username'>{user?.username}</p>
                     </div>
                  :
                     <p>Please login</p>
                  }
               </div>

            <div className="messages-container">
               <MessageBox />
            </div>

            <div className="send-message-container">
                  {user
                  ?
                     <MessageInput />
                  :
                     <p>Please login to send messages</p>   
                  }
               </div>
         </div>
      </section>
   )
}
