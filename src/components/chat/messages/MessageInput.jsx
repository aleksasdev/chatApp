import React, { useContext, useState } from 'react'
import { MessagesContext } from './../../../contexts/MessagesProvider';

export const MessageInput = () => {

   const [value, setValue] = useState("");
   const { sendPublicMessage } = useContext(MessagesContext);

   const sendMessage = async (e) =>{
      if(e.key !== "Enter") return;
      if(!value) return;

      sendPublicMessage(value);
      setValue("")
   }

   const handleChange = (e) =>{
      setValue(e.target.value);
   }

   return (
      <input 
         className="send-message-input"
         type="text"
         onKeyDown={sendMessage}
         value={value}
         onChange={handleChange}
      />
   )
}
