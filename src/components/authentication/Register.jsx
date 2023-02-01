import { ValidationForm } from '@aleksasdev/validation-form'
import { ValidInput } from '@aleksasdev/validation-form'
import React from 'react'
import { DefaultContext } from '@/contexts/DefaultProvider';
import { useContext } from 'react';
import { MINIMUM_LENGTH_8 } from '@aleksasdev/validation-form';
import './authentication.css'
import { useNavigate } from 'react-router-dom';
import { registerUser } from './authentication';
import { Fetcher } from '@aleksasdev/json-api';
import { DATABASE_URL, USERS_ROUTE } from '@/constants/general';

export const Register = () => {

   const { setError } = useContext(DefaultContext);
   const navigator = useNavigate();

   const handleRegister = async (values) =>{
      const [username, password, repeatPassword, avatarUrl] = values;

      if(password !== repeatPassword){
         setError("Passwords don't match");
         return;
      }

      const allUsers = await new Fetcher(DATABASE_URL+USERS_ROUTE).get();
      const isUsernameTaken = allUsers.find(user => user.username === username);
      if(isUsernameTaken){
         setError("Username is already taken");
         return;
      }
      
      registerUser({
         username,
         password,
         avatarUrl
      })

      navigator("/chat");
   }

   return (
      <section id="register">
         <ValidationForm onCompleted={handleRegister} label="Register" >
            <p>Username</p>
            <ValidInput name="username" />
            <p>Password</p>
            <ValidInput name="password" requirements={MINIMUM_LENGTH_8} />
            <p>Repeat password</p>
            <ValidInput name="repeatPassword" requirements={MINIMUM_LENGTH_8} />
            <p>Profile link</p>
            <ValidInput name="profileUrl" />
         </ValidationForm>
      </section>
   )
}
