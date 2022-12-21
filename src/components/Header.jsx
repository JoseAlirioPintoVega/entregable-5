import React from 'react'
import './pokedex/styles/header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className='header__red'>
            <img className='header__pokedex' src="/Home/pokedex.png"  alt="" />
        </div>
        
        <div className='header__black'>
            <img className='header__pokeball' src="/Home/pokeball.png" alt="" />
        </div>
        
    </div>
  )
}

export default Header