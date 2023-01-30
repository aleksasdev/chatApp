import { ValidationForm } from '@aleksasdev/validation-form'
import { ValidInput } from '@aleksasdev/validation-form'
import React from 'react'
import { DATABASE_URL, DefaultContext } from './../../contexts/DefaultProvider';
import { useContext } from 'react';
import { USERS_ROUTE } from '@/contexts/UserProvider';
import Fetcher from '@/components/external/jsonApi/Fetcher';
import { MINIMUM_LENGTH_8 } from '@aleksasdev/validation-form';

export const Login = () => {

   const { setError } = useContext(DefaultContext);

   const handleLogin = async (values) =>{
      const [username, password, repeatPassword] = values;

      console.log(values)
      console.log(password)
      console.log(repeatPassword)

      const isPasswordMatch = password === repeatPassword;
      if(!isPasswordMatch){
         setError("Passwords don't match!");
         return;
      }

      const allUsers = await new Fetcher(DATABASE_URL+USERS_ROUTE).get();
      console.log(allUsers)

      // const isUsernameTaken = 
   }

   return (
      <ValidationForm onCompleted={handleLogin} label="Login" >
         <p>Username</p>
         <ValidInput name="username" />
         <p>Password</p>
         <ValidInput name="password" requirements={MINIMUM_LENGTH_8} />
         {/* <p>Repeat Password</p>
         <ValidInput name="repeatPassword" requirements={MINIMUM_LENGTH_8} /> */}
      </ValidationForm>
   )
}
