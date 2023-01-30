import { ValidationForm } from 'components/external/validationForm/ValidationForm'
import { ValidInput } from 'components/external/validationForm/ValidInput'
import React from 'react'
import { MINIMUM_LENGTH_8 } from 'components/external/validationForm/requirements';
import { DefaultContext } from './../../contexts/DefaultProvider';
import { useContext } from 'react';

export const Login = () => {

   const { setError } = useContext(DefaultContext);

   const handleLogin = (values) =>{
      const [username, password, repeatPassword] = values;

      const isPasswordMatch = password === repeatPassword;
      if(!isPasswordMatch){
         setError("Passwords don't match!");
         return;
      }
   }

   return (
      <ValidationForm onCompleted={handleLogin} label="Login" >
         <p>Username</p>
         <ValidInput name="username" requirements={MINIMUM_LENGTH_8} />
         <p>Password</p>
         <ValidInput name="password" requirements={MINIMUM_LENGTH_8} />
         <p>Repeat Password</p>
         <ValidInput name="repeatPassword" requirements={MINIMUM_LENGTH_8} />
      </ValidationForm>
   )
}
