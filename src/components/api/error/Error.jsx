import React from 'react'
import { useEffect, useState, useContext } from 'react';
import './error.css';
import { DefaultContext } from './../../../contexts/DefaultProvider';



export const Error = ({ errorMessage }) => {

   const { setError, mousePosition } = useContext(DefaultContext);
   const [newMousePosition, setNewMousePosition] = useState({
      x: mousePosition.current.x,
      y: mousePosition.current.y
   });

   const deleteError = async () =>{
      await new Promise(r => setTimeout(r, 3000));
      setError(null);
   }

   const followMousePosition = () =>{

      const handleMouseMove = async (event) => {
         await new Promise(r => setTimeout(r, 15));
         setNewMousePosition({ x: event.clientX, y: event.clientY });
      };
   
      window.addEventListener('mousemove', handleMouseMove);

      return () => {
         window.removeEventListener('mousemove',handleMouseMove);
      }
   }

   useEffect(()=>{
      followMousePosition();
      deleteError();
   }, [])

   return (
      <div className='error-container' style={{
         left: newMousePosition.x,
         top: newMousePosition.y
      }}>
         <p>{errorMessage}</p>
      </div>
   )
}
