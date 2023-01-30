import React from 'react'
import { useEffect, useState, useContext } from 'react';
import './error.css';
import { DefaultContext } from './../../../contexts/DefaultProvider';



export const Error = ({ errorMessage }) => {

   const { setError } = useContext(DefaultContext);

   const deleteError = async () =>{
      await new Promise(r => setTimeout(r, 2000));
      setError(null);
   }

   useEffect(()=>{
      deleteError();
   }, [])

   return (
      <div className='error-container'>
         <p>{errorMessage}</p>
      </div>
   )
}
