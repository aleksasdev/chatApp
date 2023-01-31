export function registerUser({  }){

}

export function loginUser({ userId, username, avatarUrl, setUser }){
   setUser({
      userId,
      username,
      avatarUrl
   })
}