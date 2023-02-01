import React, { useContext, useEffect } from 'react'
import './chat.css'
import { UserContext } from './../../contexts/UserProvider';
import { MessagesContext } from './../../contexts/MessagesProvider';

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
            </div>

            <div className="messages-container">
               {publicMessages &&
                  console.log(publicMessages)
               }
            </div>
         </div>
      </section>
   )
}
