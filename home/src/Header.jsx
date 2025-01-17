import React from 'react'
import MiniFavorite from 'favorite/MiniFavorite'
import Login from 'favorite/Login'

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div style={{ padding: 5, backgroundColor: 'black', color: 'white', width: '60%', display: 'flex', justifySelf: 'center' }}
    >
      <div style={{ display: 'flex', marginLeft: '2rem', justifyContent: 'flex-start' }}>
        <Link to="/">Movie Web</Link>
        <div style={{ margin: '0 2rem' }}></div>
        <Link to="/favorite">Favorite List</Link>
      </div>
      <div style={{ display: 'flex', marginRight: '3rem', justifyContent: 'flex-end', position: 'relative', marginLeft:'auto', marginRight:'2rem' }}>
        <MiniFavorite></MiniFavorite>
        <Login></Login>
      </div>
    </div>
  )
}

export default Header