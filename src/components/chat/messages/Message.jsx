import React from 'react'

export const Message = ({ messageObject }) => {

   const { ownerAvatarUrl, ownerName, message, date  } = messageObject;

   return (
      <div className='message-container'>
         <img src={ownerAvatarUrl} alt="user-avatar" />

         <div className="content">
            <div className="user-details">
               <p className='message-username'>{ownerName}</p>
               <p className='message-date'>{date}</p>
            </div>

            <div className="message-body-container">
               <p className='message-body'>{message}</p>
            </div>
         </div>
      </div>
   )
}
