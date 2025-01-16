import React from 'react'
import MiniFavorite from 'favorite/MiniFavorite'
import Login from 'favorite/Login'

const Header = () => {
  return (
    <div style={{ padding: 5, backgroundColor: 'black', color: 'white',width:'60%', display:'flex', justifyContent:'flex-end', justifySelf:'center' }}
    >
      <div style={{ display: 'flex', marginRight:'3rem',justifyContent:'flex-end', position:'relative' }}>
        <MiniFavorite></MiniFavorite>
        <Login></Login>
      </div>
    </div>
  )
}

export default Header