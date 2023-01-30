import React, { useState } from 'react'
import { useContext } from 'react';
import { isError } from './requirements';
import { ValidationFormContext } from './ValidationForm';

export const ValidInput = ({ name, requirements }) => {

   const [value, setValue] = useState("");

   const { formObject } = useContext(ValidationFormContext);
   const { setError, inputs } = formObject;

   const handleChange = (e) =>{

      const currentValue = e.target.value;

      if(!isError(setError, currentValue, requirements)) setError(null);
      setValue(currentValue);
   }

   const addToRef = (element) =>{
      if(inputs.current.includes(element)) return;

      inputs.current.push(element);
   }

   return (
      <input 
         type="text"
         name={name}
         requirements={requirements} 
         value={value}
         onChange={handleChange}
         ref={addToRef}
      />
   )
}
