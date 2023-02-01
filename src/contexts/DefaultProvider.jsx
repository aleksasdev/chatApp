import React, { useState } from 'react'
import { useRef, useEffect } from 'react';

export const DefaultContext = React.createContext();

export const DefaultProvider = (props) => {

   const [error, setError] = useState("");
   const mousePosition = useRef({});

   const handleMouseMove = async (e) =>{
      await new Promise(r => setTimeout(r, 100)); // this is done for performance
      mousePosition.current = { x: e.clientX, y: e.clientY };
   }

   const handleLoading = () =>{
      window.addEventListener('mousemove', handleMouseMove);
   }

   useEffect(()=>{
      handleLoading();
   }, [])

   return (
      <DefaultContext.Provider value={{
         mousePosition,
         error, setError
      }}>
         {props.children}
      </DefaultContext.Provider>
   )
}
