import React from 'react'
import { useEffect, useContext } from 'react';
import './error.css';
import { DefaultContext } from '@/contexts/DefaultProvider';



export const Error = () => {

   const { error, setError, mousePosition } = useContext(DefaultContext);

   const deleteError = async () =>{
      await new Promise(r => setTimeout(r, 3000));
      setError("");
   }

   useEffect(()=>{
      deleteError();
   }, [])

   return (
      <div className='error-container' style={{
         left: mousePosition.current.x -100,
         top: mousePosition.current.y - 140,
      }}>
         <p>{error}</p>
      </div>
   )
}
