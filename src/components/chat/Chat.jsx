import React from 'react'
import './chat.css'

export const Chat = () => {
   return (
      <section id="chat">
         <div className="chat-container">
            <div className="friends-container">
               <div className="user-info-container"></div>
            </div>
            <div className="messages-container"></div>
         </div>
      </section>
   )
}
