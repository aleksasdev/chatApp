import { Fetcher } from '@aleksasdev/json-api';
import { nanoid } from 'nanoid';
import { DATABASE_URL } from '@/contexts/DefaultProvider';
import { USERS_ROUTE } from '@/contexts/UserProvider';

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