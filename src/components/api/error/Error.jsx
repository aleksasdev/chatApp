import React from 'react'
import { useEffect, useState, useContext } from 'react';
import './error.css';
import { DefaultContext } from './../../../contexts/DefaultProvider';



export const Error = ({ errorMessage }) => {

   const { setError } = useContext(DefaultContext);
   const [mousePosition, setMousePosition] = useState({});

   const deleteError = async () =>{
      await new Promise(r => setTimeout(r, 3000));
      setError(null);
   }

   const followMousePosition = () =>{

      const handleMouseMove = async (event) => {
         await new Promise(r => setTimeout(r, 5));
         setMousePosition({ x: event.clientX, y: event.clientY });
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
         left: mousePosition.x,
         top: mousePosition.y
      }}>
         <p>{errorMessage}</p>
      </div>
   )
}
