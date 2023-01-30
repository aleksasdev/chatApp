import React from 'react'
import { useState } from 'react';
import './index.css';
import { onSubmit } from './onSubmit';
import { createRef } from 'react';
import { createContext } from 'react';

export const ValidationFormContext = createContext();

export const ValidationForm = ({ onCompleted, label, ...props }) => {

   const inputs = createRef([]);
   inputs.current = [];

   const [error, setError] = useState(null);

   const formObject = {
      inputs,
      onCompleted,
      error: error,
      setError: setError,
   }

   return (
      <ValidationFormContext.Provider value={{
         formObject
      }}>
         <form className="validation-form" onSubmit={e=> onSubmit(e, formObject)}>
            {[props.children].map(child => child)}
            <input type="submit" value={label} />

            <div className="error-widget" style={{visibility: error ? "visible" : "hidden"}}>
               <p>{error}</p>
            </div>
         </form>
      </ValidationFormContext.Provider>
   )
}
