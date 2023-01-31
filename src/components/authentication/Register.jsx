import { ValidationForm } from '@aleksasdev/validation-form'
import { ValidInput } from '@aleksasdev/validation-form'
import React from 'react'
import { DATABASE_URL, DefaultContext } from '@/contexts/DefaultProvider';
import { useContext } from 'react';
import { USERS_ROUTE } from '@/contexts/UserProvider';
import { MINIMUM_LENGTH_8 } from '@aleksasdev/validation-form';
import './authentication.css'
import { Fetcher } from '@aleksasdev/json-api';
import { USER_TEMPLATE } from '@/contexts/UserProvider';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';

export const Register = () => {

   const { setError } = useContext(DefaultContext);
   const navigator = useNavigate();

   const handleRegister = async (values) =>{
      const [username, password, repeatPassword, profileUrl] = values;

      if(password !== repeatPassword){
         setError("Passwords don't match");
         return;
      }
      
      const userTemplate = USER_TEMPLATE;
      userTemplate.id = nanoid();
      userTemplate.userame = username;
      userTemplate.password = password;
      userTemplate.avatarUrl = profileUrl;

      new Fetcher(DATABASE_URL+USERS_ROUTE).post(userTemplate);
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