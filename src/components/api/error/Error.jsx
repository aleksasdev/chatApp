import React from 'react'
import { useEffect, useState } from 'react';
import './error.css';

export const Error = ({ errorMessage }) => {

   const [displayError, setDisplayError] = useState(true);

   const deleteError = async () =>{
      await new Promise(r => setTimeout(r, 2000));
      setDisplayError(false);
   }

   useEffect(()=>{
      deleteError();
   }, [])

   return (
      <>
      {displayError
      ?
         <div className='error-container'>
            <p>{errorMessage}</p>
         </div>
      :
         null
      }
      </>
   )
}
