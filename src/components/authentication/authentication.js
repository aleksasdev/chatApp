import { Fetcher } from '@aleksasdev/json-api';
import { nanoid } from 'nanoid';
import { DATABASE_URL, USERS_ROUTE } from '@/constants/general';

export function registerUser({ username, password, avatarUrl }){
   new Fetcher(DATABASE_URL+USERS_ROUTE).post({
      id: nanoid(),
      username, 
      password, 
      avatarUrl
   })
}

export function loginUser({ userId, username, avatarUrl, setUser }){
   setUser({
      userId,
      username,
      avatarUrl
   })
}