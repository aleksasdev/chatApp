import React, { useState } from 'react'
import { Error } from './../components/api/error/Error';

export const DefaultContext = React.createContext();

export const DefaultProvider = (props) => {

   const [error, setError] = useState(null);

   return (
      <DefaultContext.Provider value={{
         error, setError
      }}>
         {error && <Error errorMessage={error} />}
         {props.children}
      </DefaultContext.Provider>
   )
}
