import React, { useState, useEffect } from 'react';

import { login, jwt } from './favorite';
import Login from './Login';
import MiniFavorite from './MiniFavorite';

const FavoriteContent = () => {
  const [token, setToken] = useState("");

  useEffect(()=>{
    return jwt.subscribe((val)=>setToken(val??""))
  },[])

  return (
    <div>JWT:
      {token}
      <Login />
      <MiniFavorite />
    </div>
  )
}

export default FavoriteContent