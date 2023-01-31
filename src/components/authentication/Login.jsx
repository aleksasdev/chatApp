import { ValidationForm } from '@aleksasdev/validation-form'
import { ValidInput } from '@aleksasdev/validation-form'
import React from 'react'
import { DATABASE_URL, DefaultContext } from './../../contexts/DefaultProvider';
import { useContext } from 'react';
import { USERS_ROUTE } from '@/contexts/UserProvider';
import { MINIMUM_LENGTH_8 } from '@aleksasdev/validation-form';
import './authentication.css'
import { Fetcher } from '@aleksasdev/json-api';

export const Login = () => {

   const { setError } = useContext(DefaultContext);

   const handleLogin = async (values) =>{
      const [username, password] = values;

      const allUsers = await new Fetcher(DATABASE_URL+USERS_ROUTE).get();

      const isUsernameValid = allUsers.find(user => user.username === username);
      if(!isUsernameValid){
         setError("Username doesn't exist");
         return;
      }

      const isPasswordValid = allUsers.find(user => user.password === password);
      if(!isPasswordValid){
         setError("Password is wrong!");
         return;
      }
   }

   return (
      <section id="login">
         <ValidationForm className="login-form" onCompleted={handleLogin} label="Login" >
            <p>Username</p>
            <ValidInput name="username" />
            <p>Password</p>
            <ValidInput name="password" requirements={MINIMUM_LENGTH_8} />
         </ValidationForm>
      </section>
   )
}
