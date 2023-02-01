import { ValidationForm } from '@aleksasdev/validation-form'
import { ValidInput } from '@aleksasdev/validation-form'
import React from 'react'
import { DefaultContext } from './../../contexts/DefaultProvider';
import { useContext, useState } from 'react';
import { MINIMUM_LENGTH_8 } from '@aleksasdev/validation-form';
import './authentication.css'
import { Fetcher } from '@aleksasdev/json-api';
import { UserContext } from './../../contexts/UserProvider';
import { useNavigate } from 'react-router-dom';
import { loginUser } from './authentication';
import { DATABASE_URL, USERS_ROUTE } from '@/constants/general';

export const Login = () => {

   const { setError } = useContext(DefaultContext);
   const { setUser } = useContext(UserContext);
   const [shouldRememberUser, setShouldRememberUser] = useState(false);
   const navigator = useNavigate();

   const saveUserLoginInformation = (username, password) =>{
      if(!shouldRememberUser) return;

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      console.log("Saved user details");

   }

   const handleLogin = async (values) =>{
      const [username, password] = values;

      const allUsers = await new Fetcher(DATABASE_URL+USERS_ROUTE).get();
      const currentUserDetails = allUsers.find(user => user.username === username);

      if(!currentUserDetails){
         setError("Username doesn't exist");
         return;
      }

      const isPasswordValid = password === currentUserDetails.password;
      if(!isPasswordValid){
         setError("Password is wrong!");
         return;
      }

      saveUserLoginInformation(username, currentUserDetails.password);
      loginUser({
         id: currentUserDetails.id,
         username: username,
         avatarUrl: currentUserDetails.avatarUrl,
         setUser
      });
      navigator("/chat");
   }

   return (
      <section id="login">
         <ValidationForm onCompleted={handleLogin} label="Login" >
            <p>Username</p>
            <ValidInput name="username" />
            <p>Password</p>
            <ValidInput name="password" requirements={MINIMUM_LENGTH_8} />

            <div className='remember-me-container'>
               <p>Remember me</p>
               <input type="checkbox" onClick={e => setShouldRememberUser(current => !current)} className='checkbox-style' />
            </div>
         </ValidationForm>
      </section>
   )
}
